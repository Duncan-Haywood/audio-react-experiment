import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Howl, Howler } from 'howler'
// import cricketsAudio from './sounds/crickets-night.mp3'
import menuClickAduio from './sounds/menu-button-click.wav'
import UIfx from 'uifx'



class App extends React.Component {
  beep = new UIfx(menuClickAduio);
  playBeep = () => {this.beep.play(1.0)}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            A React app for testing how to play audio.
          </p>
          <button onClick={this.playBeep}>Make a Click</button>
        </header>
      </div>
    );
  }
}

export default App;
