import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Howl, Howler } from 'howler'
// import cricketsAudio from './sounds/crickets-night.mp3'
import menuClickAduio from './sounds/menu-button-click.wav'
import waterDropAudio from './sounds/water-drop-click-production.mp3'
import UIfx from 'uifx'



class App extends React.Component {
  click = new UIfx(menuClickAduio);
  waterDrop = new UIfx(waterDropAudio);
  playClick = () => {this.click.play(1.0)}
  playWaterDrop = () => {this.waterDrop.play(1.0)}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            A React app for testing how to play audio.
          </p>
          <button onClick={this.playClick}>Make a Click</button>
          <button onClick={this.playWaterDrop}>Water Drop</button>
        </header>
      </div>
    );
  }
}

export default App;
