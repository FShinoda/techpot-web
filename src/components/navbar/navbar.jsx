import React from 'react';
import './navbar.css';

import Logo from '../../assets/logo-redborder.png';
import Notification from "../../assets/icone_sino.png"
import Message from "../../assets/icone_mensagem.png";
import ProfPic from "../../assets/userProfilePlaceholder.jpg";
import GroupPic from "../../assets/icone_grupo.png";
import Calendar from "../../assets/icone_evento.png";
import Search from "../../assets/icone_lupa.png";

const Navbar = () => {

    return (
        <div className="Navbar">
            <div className="header-caixa">
                <div className="header-lefticons">
                    <div className="header-user">
                        <img src={ProfPic} alt="Icon-ProfilePic" />
                        <p>Anônimo</p>
                    </div>
                    <img src={GroupPic} alt="Icon-GroupPic" />
                    <img src={Calendar} alt="Icon-Calendar" />
                </div>


                <div className="header-righticons">
                    <div className='barra'>
                        <input placeholder="Pesquisar..."></input>
                        <div className="Lupa">
                            <img src={Search} alt="Icon-Lupa" />
                        </div>
                    </div>
                    <img src={Notification} alt="Icon-Notification" />
                    <img src={Message} alt="Icon-Message" />
                </div>
            </div>
            <div className="header-logo">
                <img id="logo" src={Logo} alt="Logo Techpot" />
            </div>
        </div>
    )
}

export default Navbar;