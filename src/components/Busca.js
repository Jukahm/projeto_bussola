import React, { Component } from 'react';
import { Form } from './Form';
import '../css/App.css';

export class Busca extends Component {
    handleSubmit = () => {
        
    }

    render() {
        return (
            <div className="conteudo">
                <h2>Buscar artista</h2>
                <Form />
            </div>

        );
    }
}

