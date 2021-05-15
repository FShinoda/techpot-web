import React from 'react';
import './style.css';

// Components
import EditHeader from '../../components/editHeader/editHeader.jsx';

const PortfolioEdit = () =>{
    return(
        <div className="PortfolioEdit">
            <EditHeader title="Meu Portifólio"/>
            <div className="PortfolioEdit-container top-container">
                <h4>Em desenvolvimento...</h4>
            </div>
            
        </div>
    )
}

export default PortfolioEdit;