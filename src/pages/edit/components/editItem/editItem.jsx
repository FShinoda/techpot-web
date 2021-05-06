import React from 'react';
import './style.css';

const EditItem = ({titulo, clickEvent, isSelected}) =>{
    return(
        <button className={isSelected ? "EditItem-selected" : "EditItem"} onClick={clickEvent}>
            <div className="item-hover"></div>
            <h6>{titulo}</h6>
        </button>
    )
}

export default EditItem;