// Importar React
import React from 'react';

// Importar CSS
import './style.css';

// Importar Assets
import cachoro from '../../../../assets/cachoroTeste.jpg'


const Container = () =>{
    return(
        <div id="Container">
            <div className="container-basico">
                <h5>Eu sou um componente!</h5>
                <hr></hr>
                <img src={cachoro} className="imgCachoro"/>
            </div>
        </div>
    )
}

export default Container;