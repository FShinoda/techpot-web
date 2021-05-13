import React from 'react';
import './style.css';


// Components
import EditItem from './components/editItem/editItem.jsx'

// Icons
import { LeftOutlined, UserOutlined, BellOutlined, AuditOutlined, LockOutlined } from '@ant-design/icons';

const GeneralEdit = () =>{
    return(
        <div className="GeneralEdit">
            <div className="GeneralEdit-header">
                <LeftOutlined className="GeneralEdit-header-icon"/>
                <h6>Configurações</h6>
            </div>

            <div className="GeneralEdit-container">
                <EditItem icon={<LockOutlined />} title={"Minha conta"}/> 
                <EditItem icon={<UserOutlined/>} title={"Meu perfil"}/> 
                <EditItem icon={<AuditOutlined />} title={"Meu Portifólio"}/> 
                <EditItem icon={<BellOutlined />} title={"Notificações"}/> 
                
                <button className="GeneralEdit-btn-logout">Log out</button>
            
            </div>
        </div>
    )
}

export default GeneralEdit;


