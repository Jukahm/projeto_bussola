import React, { Component } from 'react';
import { Form } from './Form';
import { Table } from './Table';
import '../css/App.css';

export class Busca extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_artista: '',
            musicas: ''
        };
    }

    handleSubmit = (e) => {
        if (e.target !== undefined) e.preventDefault();
        if (this.refs.hasOwnProperty("form_ref")) {
            let url = "https://api.spotify.com/v1/search?q=" + this.refs.form_ref.state.artista + '&type=artist&limit=1';
            fetch(url, {
                method: 'get',
                headers: {
                    'Authorization': 'Bearer ' + this.refs.form_ref.state.access_token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                    url = "https://api.spotify.com/v1/artists/" + data.artists.items[0].id + "/top-tracks?country=BR";
                    console.log("EEIJSIS :" + this.state.id_artista);
                    fetch(url, {
                        method: 'get',
                        headers: {
                            'Authorization': 'Bearer ' + this.refs.form_ref.state.access_token,
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(data => this.setState({
                            musicas: data.tracks
                        })
                        )
                        .catch((err) => {
                            console.error(err);
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                })
        }
    };

    render() {
        return (
            <div className="conteudo">
                <h2>Buscar artista</h2>
                <Form ref="form_ref" handleSubmit={this.handleSubmit} />
                {(this.state.musicas !== '') ? <Table faixas={this.state.musicas} /> : ''}
            </div>

        );
    }
}

