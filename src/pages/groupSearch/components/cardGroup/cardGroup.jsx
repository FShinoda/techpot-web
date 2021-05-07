import React from 'react';

import './style.css';

// Assets
import imgPlaceholder from '../../../../assets/groupPlaceholder.jpeg';

const CardGroup = ({title, career, img}) =>{
    return(
        <div className="CardGroup">
            <div className="cardGroup-img">
                <img src={imgPlaceholder} alt="Imagem do grupo" />
            </div>
            <div className="cardGroup-desc">
                <h6>{title}</h6>
                <p>{career}</p>
            </div>
        </div>
    )
}

export default CardGroup;