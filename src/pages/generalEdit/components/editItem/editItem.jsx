import React from 'react';
import './style.css';

// Icon
import { RightOutlined } from '@ant-design/icons';

const EditItem = ({icon, title, setIsActive, isActive}) =>{
    return(
        <div className="EditItem" onClick={setIsActive}>
                
            <div className="EditItem-title">
                <span>{icon}</span>
                <span className="EditItem-title-padding">{title}</span>
            </div>
            <div className="EditItem-drop">
                <RightOutlined className={ isActive ? ("EditItem-active") : null}/>
            </div>
        </div>
    )
}

export default EditItem;