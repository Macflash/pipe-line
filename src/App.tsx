import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Line } from './line';
import { Pipe } from './pipe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Line />
        <Line />
        <Line />
        <Line />
      </div>
    );
  }
}

export default App;
