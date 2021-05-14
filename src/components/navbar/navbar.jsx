import React from 'react';
import './navbar.css';

import Logo from '../../assets/logo-redborder.png';
import Notification from "../../assets/icone_sino.png"
import Message from "../../assets/icone_mensagem.png";
import ProfPic from "../../assets/userProfilePlaceholder.jpg";
import Search from "../../assets/icone_lupa.png";

const Navbar = () => {

    return (
        <div className="Navbar">
            <div className="header-caixa">
                <div className="header-user">
                    <img src={ProfPic} alt="Icon-ProfilePic" />
                </div>

                <div className="header-lefticons"></div>

                <div className="header-logo">
                    <img id="logo" src={Logo} alt="Logo Techpot" />
                </div>

                <div className = "header-righticons">
                        <input placeholder="Pesquisar..."></input>

                        <img src={Notification} alt="Icon-Notification" width="30px" />
                        <img src={Message} alt="Icon-Message" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;