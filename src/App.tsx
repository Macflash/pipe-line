import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Line } from './line';
import { Pipe } from './pipe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Line total={400}>
            <Pipe total={10} size={3} scale={1000} />
            <Pipe total={10} size={4} scale={1000} />
            <Pipe total={10} size={2} scale={1000} />
        </Line>
        <Line total={400}>
            <Pipe total={10} size={1} scale={1000} />
            <Pipe total={10} size={1} scale={1000} />
            <Pipe total={10} size={3} scale={1000} />
            <Pipe total={10} size={5} scale={1000} />
        </Line>
      </div>
    );
  }
}

export default App;
