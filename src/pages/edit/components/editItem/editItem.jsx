import React from 'react';
import './style.css';

const EditItem = ({titulo, clickEvent, key}) =>{
    return(
        <button className="EditItem" onClick={clickEvent}>
            <div className="item-hover"></div>
            <h6>{titulo}</h6>
        </button>
    )
}

export default EditItem;