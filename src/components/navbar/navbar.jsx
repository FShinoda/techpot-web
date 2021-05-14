import React from 'react';
import './navbar.css';

const Navbar = () => {

    return (
        <div className="Navbar">
            <div className="header-caixa">
                <ul className="header-logo">
                    <li><img src="../../assets/logo-redborder.png" alt="Logo Techpot" /></li>
                </ul>

                <div className="header-search">
                    <input placeholder="Pesquisar..."></input>
                </div>
                <nav>
                    <ul className="header-nav">
                        <li><img src="../../assets/icone_sino.png" alt="Icon-Notification" width="30px" /></li>
                        <li><img src="../../assets/icone_mensagem.png" alt="Icon-Message" /></li>
                        <li>Olá, Surubatur</li>
                        <li className="nav__item"><img src="../../assets/userProfilePlaceholder.png" alt="Icon-ProfilePic" /></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;