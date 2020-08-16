import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Howl } from 'howler'
import cricketsAudio from './sounds/crickets-night.mp3'
import menuClickAudio from './sounds/menu-button-click.wav'
import waterDropAudio from './sounds/water-drop-click-production.mp3'
import UIfx from 'uifx'

// function SoundsDev(){
//   const [playing, setPlaying] = useState(true);
  
//   return();
// }
class SoundFX extends React.Component{
  click = new UIfx(menuClickAudio);
  waterDrop = new UIfx(waterDropAudio);
  playClick = () => {this.click.play(1.0)}
  playWaterDrop = () => {this.waterDrop.play(1.0)}
  render(){
    return(
      <React.Fragment>
        <button onClick={this.playClick}>Make a Click</button>
        <button onClick={this.playWaterDrop}>Water Drop</button>
      </React.Fragment>
    );
  }
}
class BackgroundSound extends React.Component{
  constructor(props) {
    super(props);
    this.state = {playing: true};
  }
  crickets = new Howl({
    src: cricketsAudio,
    autoplay: false,
    loop: true,
    volume: 0.1
    })

  playCrickets = () => {this.crickets.play()}
  pauseCrickets = () => {this.crickets.pause()}
  toggleCrickets = () => {this.state.playing ? this.pauseCrickets(): this.playCrickets(); 
    this.setState({playing :! this.state.playing})
  }
  componentDidMount() {
    this.playCrickets()
  }
  render(){
    return(
      <button onClick={this.toggleCrickets}>{this.state.playing ? "Pause Crickets":"Play Crickets"}</button>
      );
  }
}
class Sounds extends React.Component{
  
  render(){
    return(
      <React.Fragment>
        <BackgroundSound />
        <SoundFX />
      </React.Fragment>
    );
  
  }

}


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            A React app for testing how to play audio.
          </p>
          <div>
            <Sounds/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
