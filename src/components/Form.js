import React from 'react';
import '../css/App.css';
import Controller from '../controller/controller'

export class Form extends React.Component {

    handleButtonClick = () => {
        let valor = this.refs.input_consulta.value;
        let token = Controller.getToken();
        if (valor === '') {
            alert('Por favor, insira o nome de um artista.');
            return;
        } else {
            this.setState({
                artista: valor,
                access_token: token
            })
        }
        this.refs.input_consulta.value = '';
        this.refs.input_consulta.focus();
    };

    render() {
        return (
            <div className = "formulario">
                <form id="form_consulta" onSubmit={this.props.handleSubmit} className="filtros">
                    <div className="campo">
                        <input type="text" className="cmp_busca" ref="input_consulta" placeholder="Nome" />
                        <input className="raised" type="submit" onClick={this.handleButtonClick} value="Buscar" />
                    </div>
                    
                </form>
            </div>
        )
    };

}
