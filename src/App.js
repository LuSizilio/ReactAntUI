import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cartao from "./Cartao";
class App extends Component {
  render() {
    return (
      <div>
        <Cartao title="asdd" subtitle="teste" />
        <Cartao done="false" title="Done" subtitle="teste" />
      </div>
    );
  }
}

export default App;