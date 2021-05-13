import React from 'react';
import './style.css';

const Navbar = () => {

    return (
        <div className="Navbar">
            <div className="header-caixa">
                <ul className="header-logo">
                    <li><img src="media/apple-icon-57x57.png" alt="Logo Techpot" /></li>
                </ul>

                <div className="header-search">
                    <input placeholder="Pesquisar..."></input>
                </div>
                <nav>
                    <ul className="header-nav">
                        <li><img src="media/wetransfer0505/icone_sino.png" alt="Icon-Notification" width="30px" /></li>
                        <li><img src="" alt="Icon-Message" /></li>
                        <li>Olá, Sérgio</li>
                        <li className="nav__item"><img src="" alt="Icon-ProfilePic" /></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;