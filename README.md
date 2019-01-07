# Video/Audio to Score Alignment


## How to start the alignment server
1. Install ffmpeg and make sure the executable is in the global path variable
2. Create a conda environment from `environment.yml` by typing `conda env create`
3. Activate the new environment
   - Windows: `activate score-align`
   - Mac/Unix: `source score-align`
4. Execute `cd api && python app.py`


## How to build the web-viewer
1. Install node (only current LTS version is tested)
2. Execute `cd viewer && npm install && npm run dev`


## Fix pytube error
Because YouTube recently changed some data structures, pytube throws an error. To fix this, replace the `get_initial_function_name` method in `[...]/pytube/cipher.py` by:

```python
def get_initial_function_name(js):
    """Extract the name of the function responsible for computing the signature.

    :param str js:
        The contents of the base.js asset file.

    """
    pattern = [
        r'\bc\s*&&\s*d\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*(?P<sig>[a-zA-Z0-9$]+)\('
    ]
    logger.debug('finding initial function name')
    return regex_search(pattern, js, group=1)
```