import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Howl } from 'howler'
import './crickets-night.mp3'


function App() {
  //var sound = new Howl({
  //   src: ['crickets-night.mp3'],
  //   autoplay: true,
  //   loop: true,
  //   volume: 1.0,
  //   onend: function() {
  //     console.log('Finished!');
  //   }
  // })
  // sound.play();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
