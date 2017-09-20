import math
import os
import pprint
import subprocess
import tempfile

import hug
import jpype
import librosa
import numpy as np

import pytube
from audioread import NoBackendError
from falcon import HTTP_BAD_REQUEST, HTTP_UNSUPPORTED_MEDIA_TYPE
from lxml import etree
from pydub import AudioSegment


def from_meico(xml, begin=0, end=np.inf, norm=True):
    parser = etree.XMLParser(collect_ids=False)
    xml = etree.fromstring(xml, parser=parser)

    # floats not needed if not normalizing chroma features
    array_type = np.float16 if norm else np.uint8

    shortest_duration = np.inf
    highest_date = 0
    notes_and_rests = {}
    id_to_chroma_index = {}

    # calculate correct boundaries
    if begin != 0:
        elem = xml.xpath('//*[@xml:id=\'' + begin + '\']',
                         namespaces={'xml': 'http://www.w3.org/XML/1998/namespace'})[0]
        begin = float(elem.get('midi.date'))
    if end != np.inf:
        elem = xml.xpath('//*[@xml:id=\'' + end + '\']',
                         namespaces={'xml': 'http://www.w3.org/XML/1998/namespace'})[0]
        end = float(elem.get('midi.date')) + float(elem.get('midi.dur'))

    # iterate through all rests and notes
    for elem in xml.xpath('//*[local-name()="note"][@midi.dur]|//*[local-name()="rest"][@midi.dur]'):
        identifier = elem.get('{http://www.w3.org/XML/1998/namespace}id')

        pitch = (int(float(elem.get('pnum'))) if elem.tag == '{http://www.music-encoding.org/ns/mei}note' else None)
        date = float(elem.get('midi.date'))
        dur = float(elem.get('midi.dur'))

        if begin <= date <= end:
            notes_and_rests[identifier] = {}
            notes_and_rests[identifier]['pitch'] = pitch
            notes_and_rests[identifier]['date'] = date - begin
            notes_and_rests[identifier]['dur'] = dur

            shortest_duration = min(shortest_duration, dur)
            highest_date = max(highest_date, date - begin + dur)

    # init chroma matrix with zeros
    chroma_matrix = np.zeros((12, int(highest_date / shortest_duration)), dtype=array_type)

    # add chroma feature for every note
    for elem in notes_and_rests:
        begin = math.floor(notes_and_rests[elem]['date'] / shortest_duration)
        id_to_chroma_index[elem] = begin
        if notes_and_rests[elem]['pitch'] is not None:
            end = math.ceil((notes_and_rests[elem]['date'] + notes_and_rests[elem]['dur']) / shortest_duration)
            for c in range(begin, end):
                try:
                    chroma_matrix[notes_and_rests[elem]['pitch'] % 12, c] += 1
                except IndexError:
                    pass

    # normalize every chroma feature
    if norm:
        chroma_matrix = librosa.util.normalize(chroma_matrix)

    return chroma_matrix, id_to_chroma_index


def detect_leading_silence(sound, silence_threshold=-40.0, chunk_size=10):
    '''
    sound is a pydub.AudioSegment
    silence_threshold in dB
    chunk_size in ms

    iterate over chunks until you find the first one with sound
    '''
    trim_ms = 0  # ms
    while sound[trim_ms:trim_ms + chunk_size].dBFS < silence_threshold:
        trim_ms += chunk_size

    return trim_ms


# Configure meico
meico_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'meico.jar')
jpype.startJVM(
    jpype.getDefaultJVMPath(),
    '-ea',
    '-Djava.class.path=' + meico_path
)


@hug.response_middleware()
def process_data(request, response, resource):
    response.set_header('Access-Control-Allow-Origin', '*')


@hug.post()
def get_alignment_from_audio(body, response):
    """Calculate alignment of an MEI file to an audio file.
    
    Returns a dictionary containing IDs of rests and notes as keys
    and their corresponding position in the audiofile as values."""

    multipart_data = list(body.keys())

    if 'mei' not in multipart_data or 'audio' not in multipart_data:
        response.status = HTTP_BAD_REQUEST
        return 'Please provide MEI and audio file.'

    # Work in temporary directory
    with tempfile.TemporaryDirectory() as temp_dir:
        # Load audiofile
        audio_path = os.path.join(temp_dir, 'audio')
        # Write audio to temporary file
        with open(audio_path, mode=('wb')) as audio_file:
            audio_file.write(body['audio'])
        # Read audiofile into array
        try:
            wave_data, sr = librosa.load(audio_path)
        except NoBackendError:
            response.status = HTTP_UNSUPPORTED_MEDIA_TYPE
            return 'Unsupported audio format.'

    # Generate timestamps for all notes and rests of the MEI file
    Mei = jpype.JPackage('meico').mei.Mei  # Get Mei class
    try:
        mei_xml = body['mei'].decode('utf-8')  # Extract MEI data from body
        mei = Mei(mei_xml, False)  # Read in MEI data
        mei.addIds()
        mei.exportMsm(720, True, False)  # Generate timestamps with ppq=720, no channel 10, no cleanup
        debug_mei_xml = mei.toXML()
    except jpype.JavaException:
        # TODO Proper exception handling
        response.status = HTTP_BAD_REQUEST
        return 'Error during processing of MEI file.'

    # Calculate MEI chroma features
    chroma_mei, id_to_chroma_index = from_meico(debug_mei_xml)

    # Calculate audio chroma features
    chroma_size = round(len(wave_data) / chroma_mei.shape[1])
    chroma_audio = librosa.feature.chroma_stft(y=wave_data, sr=sr, hop_length=chroma_size)

    # Calculate warping path
    path = librosa.dtw(chroma_mei, chroma_audio)[1]
    path_dict = {key: value for (key, value) in path}

    # Extract mappings
    id_to_time = {}
    chroma_length = len(wave_data) / sr / chroma_audio.shape[1]
    for identifier in id_to_chroma_index:
        id_to_time[identifier] = path_dict[id_to_chroma_index[identifier]] * chroma_length

    return id_to_time


@hug.post()
def get_alignment_from_yt(body, response):
    """Calculate alignment of an MEI file to an youtube video.

    Returns a dictionary containing IDs of rests and notes as keys
    and their corresponding position in the youtube video as values."""

    multipart_data = list(body.keys())

    if 'mei' not in multipart_data or 'youtube-url' not in body:
        response.status = HTTP_BAD_REQUEST
        return 'Please provide MEI and a valid YouTube link.'

    # Work in temporary directory
    with tempfile.TemporaryDirectory() as temp_dir:
        # Download YouTube video
        youtube_url = body['youtube-url'].decode()
        video = pytube.YouTube(youtube_url).filter('mp4')[0]
        video.download(temp_dir)
        video_path = os.path.join(temp_dir, '{0}.{1}'.format(video.filename, video.extension))

        # Extract audio using FFmpeg
        audio_path = os.path.join(temp_dir, 'audio.wav')
        cmd = ['ffmpeg',
               '-i', video_path,
               '-acodec', 'pcm_s16le',
               '-ac', '2',
               audio_path]
        subprocess.call(cmd)

        # Trim silence in audio file and read into numpy array
        audio = AudioSegment.from_file(audio_path, format='wav')
        audio = audio.split_to_mono()[0]
        sr = audio.frame_rate
        trim_start = detect_leading_silence(audio)
        trim_end = detect_leading_silence(audio.reverse())
        trimmed = audio[trim_start:len(audio) - trim_end]
        wave_data = np.asarray(trimmed.get_array_of_samples())

    # Generate timestamps for all notes and rests of the MEI file
    Mei = jpype.JPackage('meico').mei.Mei  # Get Mei class
    try:
        mei_xml = body['mei'].decode('utf-8')  # Extract MEI data from body
        mei = Mei(mei_xml, False)  # Read in MEI data
        mei.addIds()
        mei.exportMsm(720, True, False)  # Generate timestamps with ppq=720, no channel 10, no cleanup
        debug_mei_xml = mei.toXML()
    except jpype.JavaException:
        # TODO Proper exception handling
        response.status = HTTP_BAD_REQUEST
        return 'Error during processing of MEI file.'

    # Calculate MEI chroma features
    chroma_mei, id_to_chroma_index = from_meico(debug_mei_xml)

    # Calculate audio chroma features
    chroma_size = round(len(wave_data) / chroma_mei.shape[1])
    chroma_audio = librosa.feature.chroma_stft(y=wave_data, sr=sr, hop_length=chroma_size)

    # Calculate warping path
    path = librosa.dtw(chroma_mei, chroma_audio)[1]
    path_dict = {key: value for (key, value) in path}

    # Extract mappings
    id_to_time = {}
    chroma_length = len(wave_data) / sr / chroma_audio.shape[1]
    for identifier in id_to_chroma_index:
        id_to_time[identifier] = path_dict[id_to_chroma_index[identifier]] * chroma_length
        id_to_time[identifier] += trim_start / 1000  # Offset for trimmed audio

    return id_to_time


if __name__ == '__main__':
    hug.API(__name__).http.serve(host='0.0.0.0', port=8000)
