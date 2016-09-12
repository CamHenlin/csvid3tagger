# csv id3 tagger

## how to use
first, install eyed3 and ensure nodejs is installed: 

`` sudo pip install eyeD3 ``

next, clone this repo:

`` git clone https://github.com/CamHenlin/csvid3tagger.git ``

then install modules:

`` cd csvid3tagger ; npm install ``

copy your csv data over the data listed in data.csv, then copy your mp3 files into the mp3s directory. then run it:

`` node app ``

after a few minutes, the files in the mp3s directory should be tagged.


note: the csv should be structured:
filename,Title ,Composer,Game ,Genre