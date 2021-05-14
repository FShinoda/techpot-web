import React from 'react';

import './style.css';

// Icons
import { LeftOutlined } from '@ant-design/icons';


const EditHeader = ({title}) =>{
    return(
        <div className="EditHeader">
            <LeftOutlined className="EditHeader-header-icon"/>
            <h6>{title}</h6>
        </div>
    )
}

export default EditHeader;