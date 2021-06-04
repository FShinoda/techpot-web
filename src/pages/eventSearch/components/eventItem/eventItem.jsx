import React from 'react';
import './eventItem.css';

import { PlusOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

// TODO -> Improve this card
// TODO -> Remove the link style
const EventItem = ({title, img, carreer, id, date}) =>{
    return(
        <div className="GroupItem">
            <Link to={`/evento/${id}/${title}`}>
                <div className="GroupItem-img">
                    <img src={img} alt="Imagem do grupo"/>
                </div>
                <div className="GroupItem-info">
                    <div className="info-title">
                        <span>{title}</span>
                    </div>
                    <p>{carreer}</p>
                </div>
                <div className="GroupItem-icon">
                    <PlusOutlined />
                </div>
            </Link>
        </div>
    )
}

export default EventItem;