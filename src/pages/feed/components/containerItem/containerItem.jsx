import React from 'react';

import './style.css';

//placeholders
import logo from '../../../../assets/logo.png';

const ContainerItem = ({titulo, descricao, icone}) =>{

    return(
        <div className="ContainerItem">
            <div className="item-imgTitulo">
                <img src={logo} alt="foto" className="item-img"/>

                <div className="item-texto">
                    <p className="item-titulo">{titulo}</p>
                    <p className="item-desc">{descricao}</p>
                </div>
            </div>
            
            { icone ? (
                <div className="item-icon">
                    {icone}
                </div>
            ): null}
            
        </div>
    )
}

export default ContainerItem;