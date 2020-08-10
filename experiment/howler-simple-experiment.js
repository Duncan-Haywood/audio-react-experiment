const { Howl, Howler } = require('howler');
const crickets = require('./crickets-night.mp3');

var sound = new Howl({
  src: [crickets]
});

sound.play();
