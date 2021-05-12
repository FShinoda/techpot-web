import React from 'react';
import './style.css';

import {PlusOutlined} from '@ant-design/icons';

const GroupItem = ({title, img, carreer}) =>{
    return(
        <div className="GroupItem">
            <div className="GroupItem-img">
                <img src={img} alt="Imagem do grupo"/>
            </div>
            <div className="GroupItem-info">
                <div className="info-title">
                    <h6>{title}</h6>
                </div>
                <p>{carreer}</p>
            </div>
            <div className="GroupItem-icon">
                <PlusOutlined />
            </div>
        </div>
    )
}

export default GroupItem;