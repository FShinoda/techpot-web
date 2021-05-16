import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { Input } from 'antd';

// Components
import EditItem from './components/editItem/editItem.jsx';
import EditHeader from './components/editHeader/editHeader.jsx';
import UpdateImgModal from './components/updateImgModal/updateImgModal.jsx';
import OptionProfile from './components/optionProfile/optionProfile.jsx';

// Icons
import { UserOutlined, BellOutlined, AuditOutlined, LockOutlined, SmileOutlined } from '@ant-design/icons';

// Assets
import bgPlaceholder from '../../assets/profileBackgroundImage.jpg';
import profilePlaceholder from '../../assets/userPlaceholder.jpg';

const GeneralEdit = () =>{

    const [currentOption, setCurrentOption] = useState("1");
    const [currentTitle, setCurrentTitle] = useState("perfil")

    const getCurrentOption = (current) => {
        switch (current) {
            case "1":
                return "Em desenvolvimento1..."
            case "2":
                return <OptionProfile/>;
            case "3":
                return "Em desenvolvimento3..."
            default: 
                return "Em desenvolvimento..."
        }
    }
    
    const isMobile = false; 

    return(
        <div className="GeneralEdit">
            {isMobile ? (
                <div>
                    <EditHeader title="Configurações"/>
        
                    <div className="GeneralEdit-container top-container">
                        <Link to="/editar/conta" className="link-counter"><EditItem icon={<LockOutlined />} title={"Minha conta"} /></Link>
                        <Link to="/editar/perfil" className="link-counter"><EditItem icon={<UserOutlined/>} title={"Meu perfil"} /></Link>
                        <Link to="/editar/portifolio" className="link-counter"><EditItem icon={<AuditOutlined />} title={"Meu Portifólio"} /></Link>
                        <Link to="/editar/notificacao" className="link-counter"><EditItem icon={<BellOutlined />} title={"Notificações"} /> </Link>
                                    
                        <button className="GeneralEdit-btn-logout">Log out</button>
                                
                    </div>
                </div>
                
            ) : (
                <div className="GeneralEdit-desktop">
                    <div className="GeneralEdit-sidebar">
                        <div className="GeneralEdit-sidebar-header">
                            <img src={profilePlaceholder} />
                            <span>Fernanda Carreira Martins shinoda</span>
                            <p>@Fshinoda</p>
                        </div>
                        <div className="GeneralEdit-sidebar-content">
                            <EditItem key="1" icon={<LockOutlined />} title={"Minha conta"} clickEvent={() => {setCurrentOption("1"); setCurrentTitle("conta");}} isActive={currentOption === "1" ? true : false}/>
                            <EditItem key="2" icon={<UserOutlined/>} title={"Meu perfil"} clickEvent={() => {setCurrentOption("2"); setCurrentTitle("perfil");}} isActive={currentOption === "2" ? true : false}/>
                            <EditItem key="3" icon={<AuditOutlined />} title={"Meu Portifólio"} clickEvent={() => {setCurrentOption("3"); setCurrentTitle("portifolio");}} isActive={currentOption === "3" ? true : false}/>
                            <EditItem key="4" icon={<BellOutlined />} title={"Notificações"} clickEvent={() => {setCurrentOption("4")}} isActive={currentOption === "4" ? true : false}/>
                        </div>
                    </div>

                    <div className="GeneralEdit-card-edit">
                        <div className="GeneralEdit-card-edit-title">
                            <h2>Configurações de {currentTitle}</h2>
                        </div>
                        <div className="GeneralEdit-card-edit-content">
                            {getCurrentOption(currentOption)}
                            
                        </div>
                        
                    </div>
                </div>
            )}
            

        </div>
    )
}

export default GeneralEdit;


