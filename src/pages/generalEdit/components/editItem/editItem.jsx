import React from 'react';
import './style.css';

// Icon
import { RightOutlined } from '@ant-design/icons';

const EditItem = ({icon, title}) =>{
    return(
        <div className="EditItem">
            <div className="EditItem-icon">
                {icon}
            </div>
            <div className="EditItem-title">
                <span>{title}</span>
            </div>
            <div className="EditItem-enter">
                <RightOutlined />
            </div>
        </div>
    )
}

export default EditItem;