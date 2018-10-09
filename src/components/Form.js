import React from 'react';
import '../css/App.css';

export const Form = () => {
    return(
        <div>
            <form id="form_consulta" className="filtros">
            <div className="campo">
                <input type="text" className="cmp_busca" placeholder="Nome"/>
            </div>
                <input className="raised" type="submit" value="Buscar"/>
                <input className="outlined" type="button"    value="Limpar"/>
            </form>
         </div>
    )
    
}
