import React, { Component } from 'react';
import {Form} from './components/Form';
import {Header} from './components/Header';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="conteudo">
          <h2>Buscar artista</h2>
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;
