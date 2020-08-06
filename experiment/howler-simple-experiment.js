const {Howl, Howler} = require('howler');
import './crickets-night.mp3'

var sound = new Howl({
  src: ['crickets-night.mp3']
});

sound.play();
