import React, {useState} from 'react';
import './style.css';


// Components
import EditItem from './components/editItem/editItem.jsx'

// Icons
import { LeftOutlined, UserOutlined, BellOutlined, AuditOutlined, LockOutlined } from '@ant-design/icons';

const GeneralEdit = () =>{

    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [isNotifOpen, setIsNotifOpen] = useState(false);

    return(
        <div className="GeneralEdit">
            <div className="GeneralEdit-header">
                <LeftOutlined className="GeneralEdit-header-icon"/>
                <h6>Configurações</h6>
            </div>

            <div className="GeneralEdit-container">
                <EditItem icon={<LockOutlined />} title={"Minha conta"} setIsActive={() => {setIsAccountOpen(!isAccountOpen)}} isActive={isAccountOpen}/>
                {isAccountOpen ? ('a') : null} 
                <EditItem icon={<UserOutlined/>} title={"Meu perfil"} setIsActive={() => {setIsProfileOpen(!isProfileOpen)}} isActive={isProfileOpen}/>
                {isProfileOpen ? ('b') : null}  
                <EditItem icon={<AuditOutlined />} title={"Meu Portifólio"} setIsActive={() => {setIsPortfolioOpen(!isPortfolioOpen)}} isActive={isPortfolioOpen}/>
                {isPortfolioOpen ? ('c') : null}   
                <EditItem icon={<BellOutlined />} title={"Notificações"} setIsActive={() => {setIsNotifOpen(!isNotifOpen)}} isActive={isNotifOpen}/> 
                {isNotifOpen ? ('d') : null}  
                
                <button className="GeneralEdit-btn-logout">Log out</button>
            
            </div>
        </div>
    )
}

export default GeneralEdit;


