import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Busca } from './components/Busca';
import { Home } from './components/Home';
import { Header } from './components/Header';
import './css/App.css';

class App extends Component {
  

  render() {
    return (
      <div className="container">
        <Header />
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/busca' component={Busca} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
