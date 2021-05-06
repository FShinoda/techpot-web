import React from 'react';
import './style.css';

const MenuItem = ({children}) =>{
    return(
        <div className="MenuItem">
            {children}
        </div>
    )
}

export default MenuItem;