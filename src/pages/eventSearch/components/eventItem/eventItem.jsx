import React from 'react';
import './eventItem.css';

import {PlusOutlined} from '@ant-design/icons';

const EventItem = ({title, img, carreer}) =>{
    return(
        <div className="GroupItem">
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
        </div>
    )
}

export default EventItem;