import React from 'react';

import './style.css';

// Icons
import {MoreOutlined} from '@ant-design/icons';


const ContainerInfo = ({titulo, children}) =>{
    return(
        <div className="ContainerInfo">
            <div className="container-header">
                <p>{titulo}</p>
                <MoreOutlined />
            </div>
            <div className="container-body">
                {children}
            </div>
        </div>
    )
}

export default ContainerInfo;