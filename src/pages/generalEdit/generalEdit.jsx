import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import './style.css';
import { Input } from 'antd';

import Navbar from "../../components/navbar/navbar.jsx";

// Components
import EditItem from './components/editItem/editItem.jsx';
import EditHeader from './components/editHeader/editHeader.jsx';
import UpdateImgModal from './components/updateImgModal/updateImgModal.jsx';
import OptionProfile from './components/optionProfile/optionProfile.jsx';

// Icons
import { UserOutlined, BellOutlined, AuditOutlined, LockOutlined, SmileOutlined } from '@ant-design/icons';

// Helpers
import { formatUserName } from '../../helpers/formatUserName';

// Redux
import { useSelector, useDispatch } from "react-redux";
import {USER_INFO_CLEANUP, userInfo} from '../../store/_entities/User';

// Assets
import bgPlaceholder from '../../assets/profileBackgroundImage.jpg';
import profilePlaceholder from '../../assets/img/userPlaceholder.jpg';

const GeneralEdit = () =>{

    const dispatch = useDispatch();
    const { id } = useParams();

    const user_profile = useSelector((state) => state.entitie.user.profile);

    const [currentOption, setCurrentOption] = useState("1");
    const [currentTitle, setCurrentTitle] = useState("perfil")

    useEffect(() => {
        dispatch(userInfo(id, true));
    }, [])

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
                        <Link to="/editar/conta" className="link-counter" style={{color: "#ddd"}}><EditItem icon={<LockOutlined />} title={"Minha conta"} /></Link>
                        <Link to="/editar/perfil" className="link-counter"><EditItem icon={<UserOutlined/>} title={"Meu perfil"} /></Link>
                        <Link to="/editar/portifolio" className="link-counter"><EditItem icon={<AuditOutlined />} title={"Meu Portifólio"} /></Link>
                        <Link to="/editar/notificacao" className="link-counter"><EditItem icon={<BellOutlined />} title={"Notificações"} /> </Link>
                                    
                        <button className="GeneralEdit-btn-logout">Logout</button>
                                
                    </div>
                </div>
                
            ) : (
                <div className="GeneralEdit-desktop">
                    <div className="GeneralEdit-sidebar">
                        <div className="GeneralEdit-sidebar-header">
                            <img src={profilePlaceholder} />
                            <h4>{user_profile.u ? formatUserName(user_profile.u.name) : " Name"}</h4>
                            <p>@{user_profile.u ? user_profile.u.username  : "Usuario"}</p>
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


