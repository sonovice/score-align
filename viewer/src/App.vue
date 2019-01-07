<template>
  <div id="app">
    <nav class="nav has-shadow" id="top">
      <div class="nav-left">
        <a class="nav-item" href="../index.html">
          ScoreTube
        </a>
      </div>
    </nav>
    <section class="section main" v-show="showInput">
      <div class="container">

        <b-tabs position="is-centered" class="block" v-model="activeTab">
          <b-tab-item label="Audio" icon="file-audio-o">
            <b-field>
              <b-upload v-model="fileMei" accept=".mei">
                <a class="button is-primary">
                  <b-icon icon="file-code-o"></b-icon>
                  <span>MEI-Datei</span>
                </a>
              </b-upload>
              <div v-if="fileMei && fileMei.length">
                <span class="file-name">
                    {{ fileMei[0].name }}
                </span>
              </div>
            </b-field>

            <b-field>
              <b-upload v-model="fileAudio" accept="audio/*">
                <a class="button is-primary">
                  <b-icon icon="file-audio-o"></b-icon>
                  <span>Audio-Datei</span>
                </a>
              </b-upload>
              <div v-if="fileAudio && fileAudio.length">
                <span class="file-name">
                    {{ fileAudio[0].name }}
                </span>
              </div>
            </b-field>

            <a class="button is-primary" @click="uploadAudio">Hochladen</a>
          </b-tab-item>


          <b-tab-item label="YouTube" icon="youtube">
            <b-field>
              <b-upload v-model="fileMei" accept=".mei">
                <a class="button is-primary">
                  <b-icon icon="file-code-o"></b-icon>
                  <span>MEI-Datei</span>
                </a>
              </b-upload>
              <div v-if="fileMei && fileMei.length">
                <span class="file-name">
                    {{ fileMei[0].name }}
                </span>
              </div>
            </b-field>

            <b-field label="YouTube Link">
              <b-input v-model="youtubeUrl"></b-input>
            </b-field>

            <a class="button is-primary" @click="uploadYoutube">Hochladen</a>

          </b-tab-item>
        </b-tabs>
      </div>
    </section>

    <section style="text-align: center; background-color:#000000;">
      <div id="youtube" class=".text-center"></div>
    </section>
    <div id="svgMei" style="cursor:crosshair; overflow:scroll"></div>
  </div>
</template>

<script>
  import BTabItem from 'buefy/src/components/tabs/TabItem.vue'
  import BUpload from 'buefy/src/components/upload/Upload.vue'
  import getYouTubeID from 'get-youtube-id'

  function binaryIndexOf(searchElement) {
    'use strict';

    let minIndex = 0;
    let maxIndex = this.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
      currentIndex = (minIndex + maxIndex) / 2 | 0;
      currentElement = this[currentIndex];

      if (currentElement < searchElement) {
        minIndex = currentIndex + 1;
      }
      else if (currentElement > searchElement) {
        maxIndex = currentIndex - 1;
      }
      else {
        return currentIndex;
      }
    }
    return [maxIndex, minIndex];
  }

  // Re-maps a number from one range to another.
  function map(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  const vrv = new verovio.toolkit();
  vrv.setOptions({
    scale: 30,
    noLayout: 1,
    ignoreLayout: 1
  });

  let svg
  let meiData
  let pixelToTime = {}
  let timeToPixel = {}

  let barline

  const xmlParser = new DOMParser()

  const reader = new FileReader()
  reader.onloadend = function () {
    meiData = reader.result
    svg = vrv.renderData(meiData, {});
  }

  function getTimeFromPixel(pixel) {
    const array = pixelToTime
    const keyArray = $.map(array, function (value, key) {
      return key
    })
    const indices = binaryIndexOf.call(keyArray, pixel)
    const keyLeft = keyArray[indices[0]]
    const keyRight = keyArray[indices[1]]
    const valueLeft = array[keyLeft]
    const valueRight = array[keyRight]

    let currentTime = 0
    if (keyLeft !== null)
      currentTime = map(pixel, keyLeft, keyRight, valueLeft, valueRight)

    return currentTime
  }

  function getPixelFromTime(time) {
    const array = timeToPixel
    const keyArray = $.map(array, function (value, key) {
      return key
    })
    const indices = binaryIndexOf.call(keyArray, time)
    const keyLeft = keyArray[indices[0]]
    const keyRight = keyArray[indices[1]]
    const valueLeft = array[keyLeft]
    const valueRight = array[keyRight]

    return map(time, keyLeft, keyRight, valueLeft, valueRight)
  }

  export default {
    name: 'app',
    components: {
      BUpload,
      BTabItem
    },
    data() {
      return {
        activeTab: 0,
        showInput: true,
        showYoutube: false,
        fileAudio: '',
        fileMei: '',
        youtubeUrl: ''
      }
    },
    methods: {
      uploadAudio() {
        const app = this

        const loadingComponent = app.$loading.open()
        this.$forceUpdate()

        reader.readAsText(this.$data.fileMei[0])

        const audio = new Audio(URL.createObjectURL(app.$data.fileAudio[0]))

        $(document).on("keypress", function (e) {
          switch (e.which) {
            case 32: // Spacebar
              togglePause();
          }
        });

        function togglePause() {
          if (audio.paused) {
            audio.play();
          } else {
            audio.pause();
          }
        }

        function updateBarline() {
          const pixel = getPixelFromTime(audio.currentTime);
          if (isNaN(pixel)) {
            barline.style("opacity", "0.0")
          } else {
            barline.style("opacity", "1.0")
            barline.attr("x1", pixel);
            barline.attr("x2", pixel);
          }
        }

        let fd = new FormData()
        fd.append('mei', new File([this.$data.fileMei[0]], this.$data.fileMei[0].name))
        fd.append('audio', new File([this.$data.fileAudio[0]], this.$data.fileAudio[0].name))

        $.ajax({
            url: 'http://127.0.0.1:8001/get_alignment_from_audio',
            method: "POST",
            crossDomain: true,
            contentType: false,
            processData: false,
            cache: false,
            data: fd,
            success: function (idToTime) {
              app.$data.showInput = false

              console.log(idToTime)

              $("#svgMei").html(svg);
              let svgElem = d3.select('#svgMei svg')
              svgElem.selectAll(".system")
                .each(function () {
                  d3.select(this).append("rect")
                    .attr("x", this.getBBox().x)
                    .attr("y", this.getBBox().y)
                    .attr("width", this.getBBox().width)
                    .attr("height", this.getBBox().height)
                    .attr("id", d3.select(this).attr("id"))
                    .style("fill", "#df5b5b")
                    .style("opacity", "0.0")
                    .on("click", function () {
//                      $audio = $('audio')[0]
                      const newTime = getTimeFromPixel(d3.mouse(this)[0]);
                      audio.currentTime = newTime;
//                      audio.play()
                    });
                });

              Object.keys(idToTime).forEach(function (key) {
                const x = svgElem.select('#' + key).node().getBBox().x
                pixelToTime[x.toString()] = idToTime[key]
                timeToPixel[idToTime[key].toString()] = x
              })

              console.log(pixelToTime)
              console.log(timeToPixel)

              d3.select(".page-margin")
                .append("line")
                .attr("id", "barline")
                .attr("x1", -10)
                .attr("x2", -10)
                .attr("y1", 0)
                .attr("y2", "100%")
                .attr("stroke-width", 20)
                .attr("stroke", "red");

              barline = d3.select("#barline");
              setInterval(updateBarline, 20);


              loadingComponent.close()
            },
            error: function (request, status, error) {
              alert('Es ist leider ein Fehler aufgetreten.');
            }
          }
        )


      },
      uploadYoutube() {
        const app = this

        const loadingComponent = app.$loading.open()
        this.$forceUpdate()

        reader.readAsText(this.$data.fileMei[0])

        const player = new YT.Player('youtube', {
          height: '390',
          width: '640',
          videoId: getYouTubeID(app.$data.youtubeUrl)
        })

        $(document).on("keypress", function (e) {
          switch (e.which) {
            case 32: // Spacebar
              togglePause();
          }
        });

        function togglePause() {
          if (player.getPlayerState() !== 1) {
            player.playVideo();
          } else {
            player.pauseVideo();
          }
        }

        function updateBarline() {
          const pixel = getPixelFromTime(player.getCurrentTime());
          if (isNaN(pixel)) {
            barline.attr("x1", -10);
            barline.attr("x2", -10);
          } else {
            barline.attr("x1", pixel);
            barline.attr("x2", pixel);
          }
        }

        let fd = new FormData()
        const url = (app.$data.youtubeUrl.indexOf('://') === -1) ? 'http://' + app.$data.youtubeUrl : app.$data.youtubeUrl;
        fd.append('mei', new File([this.$data.fileMei[0]], this.$data.fileMei[0].name))
        fd.append('youtube-url', url)


        $.ajax({
            url: 'http://127.0.0.1:8001/get_alignment_from_yt',
            method: "POST",
            crossDomain: true,
            contentType: false,
            processData: false,
            cache: false,
            data: fd,
            success: function (idToTime) {
              app.$data.showInput = false
              app.$data.showYoutube = true
              console.log(idToTime)

              $("#svgMei").html(svg);
              let svgElem = d3.select('#svgMei svg')
              svgElem.selectAll(".system")
                .each(function () {
                  d3.select(this).append("rect")
                    .attr("x", this.getBBox().x)
                    .attr("y", this.getBBox().y)
                    .attr("width", this.getBBox().width)
                    .attr("height", this.getBBox().height)
                    .attr("id", d3.select(this).attr("id"))
                    .style("fill", "#df5b5b")
                    .style("opacity", "0.0")
                    .on("click", function () {
                      const newTime = getTimeFromPixel(d3.mouse(this)[0]);
                      player.seekTo(newTime, true);
                    });
                });

              Object.keys(idToTime).forEach(function (key) {
                const x = svgElem.select('#' + key).node().getBBox().x
                pixelToTime[x.toString()] = idToTime[key]
                timeToPixel[idToTime[key].toString()] = x
              })

              d3.select(".page-margin")
                .append("line")
                .attr("id", "barline")
                .attr("x1", -10)
                .attr("x2", -10)
                .attr("y1", 0)
                .attr("y2", "100%")
                .attr("stroke-width", 20)
                .attr("stroke", "red");

              barline = d3.select("#barline");
              setInterval(updateBarline, 20);


              loadingComponent.close()
            },
            error: function (request, status, error) {
              alert('Es ist leider ein Fehler aufgetreten.');
            }
          }
        )

      }
    }
  }
</script>

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";
  /*@import 'theme';*/
  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  .tabs {
    padding-bottom: 20px;
  }

  .tab-content {
    align-items: center;
  }
</style>
