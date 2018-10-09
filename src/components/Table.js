import React, { Component } from 'react';


export class Table extends Component {
    render() {
        return (
            <table className="tabela">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Album</th>
                        <th>Faixa</th>
                        <th>Popularidade</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.faixas.map((value, index) => {
                        let chave = index;
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.album.name}</td>
                                <td>{value.name}</td>
                                <td>{value.popularity}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}