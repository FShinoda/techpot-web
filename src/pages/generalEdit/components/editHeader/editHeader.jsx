import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

// Icons
import { LeftOutlined } from '@ant-design/icons';


const EditHeader = ({title}) =>{
    return(
        <div className="EditHeader">
            <div className="EditHeader-header-icon"><Link className="link-counter" to="/editar"><LeftOutlined /></Link></div>
            <h6>{title}</h6>
        </div>
    )
}

export default EditHeader;