import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cartao from "./Componentes/Cartao";
import Carousel from "./Componentes/Carousel";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Cartao title="asdd" subtitle="teste" />
        <Cartao done="false" title="Done" subtitle="teste" />*/}
        <Carousel/>
        <Carousel>
          
        </Carousel>

      </div>
    );
  }
}

export default App;