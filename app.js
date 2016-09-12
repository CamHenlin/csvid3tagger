var fs = require('fs');
var csv = require('fast-csv');
var id3 = require('id3-writer');

var stream = fs.createReadStream('./data.csv');
var log = console.log;

var csvStream = csv.parse()
.on('data', function(data){
    // data structure:
    // 0 filename: [ 'rf-05',
    // 1 song title / description:  'Museum',
    // 2 composer(s):  'Kirikiri-Chan, Naoshi Mizuta, Akari Kaida',
    // 3 game title:  'Megaman and Bass',
    // 4 genre:  'Jazzy' ]

    var file = new id3.File('./mp3s/' + data[0].trim() + '.mp3');
    var meta = new id3.Meta({
      artist: data[2],
      title: data[1],
      album: data[3],
      desc: data[4]
    });

    var writer = new id3.Writer();
    writer.setFile(file).write(meta, function(err) {});
})
.on('end', function() {
   log('done');
});

stream.pipe(csvStream);



