import React from 'react';
import './style.css';

// Icon
import { RightOutlined } from '@ant-design/icons';

const EditItem = ({icon, title}) =>{
    return(
        <div className="EditItem">
                
            <div className="EditItem-title">
                <span>{icon}</span>
                <span className="EditItem-title-padding">{title}</span>
            </div>
            <div className="EditItem-drop">
                <RightOutlined />
            </div>
        </div>
    )
}

export default EditItem;