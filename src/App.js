import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Howl } from 'howler'
import './crickets-night.mp3'


class App extends React.Component {
  // var sound = new Howl({
  //   src: ['crickets-night.mp3'],
  //   autoplay: true,
  //   loop: true,
  //   volume: 1.0,
  //   onend: function() {
  //     console.log('Finished!');
  //   }
  // })
  // componentDidMount() {
  //   sound.play();
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            A React app for testing how to play audio.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
