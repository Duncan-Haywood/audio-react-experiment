import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Howl, Howler } from 'howler'
import cricketsAudio from './sounds/crickets-night.mp3'
import menuClickAudio from './sounds/menu-button-click.wav'
import waterDropAudio from './sounds/water-drop-click-production.mp3'
import UIfx from 'uifx'


class App extends React.Component {
  click = new UIfx(menuClickAudio);
  waterDrop = new UIfx(waterDropAudio);
  playClick = () => {this.click.play(1.0)}
  playWaterDrop = () => {this.waterDrop.play(1.0)}
  
  crickets = new Howl({
    src: cricketsAudio,
    autoplay: true,
    loop: true,
    volume: 0.1
    })
  playCrickets = () => {this.crickets.play()}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            A React app for testing how to play audio.
          </p>
          {/*<button onClick={this.playCrickets}>Play Crickets</button>*/}
          <button onClick={this.playClick}>Make a Click</button>
          <button onClick={this.playWaterDrop}>Water Drop</button>
        </header>
      </div>
    );
  }
}

export default App;
