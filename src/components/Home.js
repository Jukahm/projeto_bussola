import React, { Component } from 'react';
import Controller from '../controller/controller'
import '../css/App.css';

export class Home extends Component {
    handleButtonClick = () => {
        Controller.getCredentials();
    }

    render() {
        return (
            <div>
                <h1 className="home">Bem vindo(a)! Conecte-se ao Spotify e veja as musicas do momento do seu artista preferido!</h1>
                <input className="raised" type="button" onClick={this.handleButtonClick} value="Login" />
            </div>

        );
    }
}

