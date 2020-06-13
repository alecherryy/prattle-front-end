import './App.scss';
import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is my React starter kit. It includes a basic App set up and Sass; plus a ready-to-go Modularscale.</p>
        </header>
      </div>
    );
  }
}

export default App;
