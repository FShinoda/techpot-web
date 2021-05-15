import React from 'react';
import './style.css';

// Icon
import { RightOutlined } from '@ant-design/icons';

const EditItem = ({icon, title, clickEvent, isActive}) =>{
    return(
        <div className={ isActive ? ("EditItem EditItem-active") : ("EditItem") } onClick={clickEvent}>
                
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