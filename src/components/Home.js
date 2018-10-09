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
                <input className="raised" type="button" onClick={this.handleButtonClick} value="Login" />
            </div>

        );
    }
}

