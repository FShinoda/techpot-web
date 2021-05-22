import React, { useState } from "react";
import "../../../node_modules/antd/dist/antd.css";
import "./navbar.css";


/* ANT DESIGN */
import { Drawer } from "antd";


/* IMAGES */
import logo from "../../assets/logo-redborder.png";
import icon from "../../assets/icone_grupo.png";
import searchIcon from "../../assets/icone_lupa-branco.png";
import searchIconRed from "../../assets/icone_lupa.png";


/* ICONS */
import { FiMenu } from "react-icons/fi";
import { DoubleRightOutlined } from "@ant-design/icons";
import { ImSearch } from "react-icons/im";


/* NAVBAR */
const Navbar = () => {
    // Mobile ( < 1024px) or Desktop ( >= 1024px) Design
    const isMobile = false;


    // Mobile Itens
    const [ showMenu, setShowMenu ] = useState(false);

    const [ showSearch, setShowSearch ] = useState(false);


    return(
        <div className="Navbar">
            {
                isMobile
                ?
                    <div className="Navbar-Mob">
                        <div className="Navbar-Mob-menu">
                            <button onClick={() => setShowMenu(!showMenu)}>
                                <FiMenu />
                            </button>

                            {
                                showMenu ?
                                    <Drawer className="Navbar-Mob-menu-drawer" title="TECHPOT" placement={"left"} closable={true} onClose={() => setShowMenu(!showMenu)} visible={true} zIndex={9999} headerStyle={{ backgroundColor: "#d0094d", border: "none", boxShadow: "0px 4px 4px 0px rgba(22, 22, 22, 0.2)", borderRadius: "0px" }}>
                                        <button className="Navbar-Mob-menu-drawer-button">
                                            <div className="Nav-drawer-left">
                                                <img src={icon} alt={""} />
                                                <h6>Meu Perfil</h6>
                                            </div>

                                            <div className="Nav-drawer-right">
                                                <DoubleRightOutlined />
                                            </div>
                                        </button>

                                        <button className="Navbar-Mob-menu-drawer-button">
                                            <div className="Nav-drawer-left">
                                                <img src={icon} alt={""} />
                                                <h6>Grupos</h6>
                                            </div>

                                            <div className="Nav-drawer-right">
                                                <DoubleRightOutlined />
                                            </div>
                                        </button>

                                        <button className="Navbar-Mob-menu-drawer-button">
                                            <div className="Nav-drawer-left">
                                                <img src={icon} alt={""} />
                                                <h6>Eventos</h6>
                                            </div>

                                            <div className="Nav-drawer-right">
                                                <DoubleRightOutlined />
                                            </div>
                                        </button>

                                        <button className="Navbar-Mob-menu-drawer-button">
                                            <div className="Nav-drawer-left">
                                                <img src={icon} alt={""} />
                                                <h6>Mensagens</h6>
                                            </div>

                                            <div className="Nav-drawer-right">
                                                <DoubleRightOutlined />
                                            </div>
                                        </button>

                                        <button className="Navbar-Mob-menu-drawer-button">
                                            <div className="Nav-drawer-left">
                                                <img src={icon} alt={""} />
                                                <h6>Notificações</h6>
                                            </div>

                                            <div className="Nav-drawer-right">
                                                <DoubleRightOutlined />
                                            </div>
                                        </button>

                                        <button className="Navbar-Mob-menu-drawer-button">
                                            <div className="Nav-drawer-left">
                                                <img src={icon} alt={""} />
                                                <h6>Configurações</h6>
                                            </div>

                                            <div className="Nav-drawer-right">
                                                <DoubleRightOutlined />
                                            </div>
                                        </button>

                                    </Drawer>

                                : null
                            }
                        </div>

                        <div className="Navbar-Mob-logo">
                            <img src={logo} alt={"Logo da TECHPOT."} />
                        </div>

                        <div className="Navbar-Mob-search">
                            <button className="Navbar-Mob-search-button" onClick={() => setShowSearch(!showSearch)}>
                                <img src={searchIcon} alt={"Ícone de busca."} />
                            </button>

                            {
                                showSearch ?
                                    <Drawer className="Navbar-Mob-search-drawer" title="PESQUISAR" placement={"right"} closable={true} onClose={() => setShowSearch(!showSearch)} visible={true} zIndex={9999} headerStyle={{ backgroundColor: "#d0094d", border: "none", boxShadow: "0px 4px 4px 0px rgba(22, 22, 22, 0.2)", borderRadius: "0px" }}>
                                        <div className="Navbar-Mob-search-drawer-bar">
                                            <div className="Navbar-Mob-search-drawer-bar-icon">
                                                <ImSearch />
                                            </div>

                                            <input type="text" placeholder="    Pesquisar . . ." />
                                        </div>

                                        <div className="Navbar-Mob-search-drawer-sug">
                                            <h3>Sugestões</h3>

                                            {/* <div></div> */}
                                        </div>
                                    </Drawer>
                                    
                                :   null
                            }
                        </div>
                    </div>
                :
                    <div className="Navbar-Desk">
                        <div className="Navbar-Desk-nav">
                            <div className="Navbar-Desk-nav-left">
                                <div className="Navbar-Desk-nav-left-user">
                                    <button className="Navbar-Desk-nav-left-user-button">
                                        <img src={icon} alt={"Foto do usuário."} />
                                    </button>
                                </div>

                                <div className="Navbar-Desk-nav-left-icons">
                                    <div className="Navbar-Desk-nav-left-icons-config">
                                        <button className="Navbar-Desk-nav-left-icons-buttons">
                                            <img src={icon} alt={"Ícone de configurações."} />
                                        </button>
                                    </div>

                                    <div className="Navbar-Desk-nav-left-icons-groups">
                                        <button className="Navbar-Desk-nav-left-icons-buttons">
                                            <img src={icon} alt={"Ícone de grupos."} />
                                        </button>
                                    </div>

                                    <div className="Navbar-Desk-nav-left-icons-events">
                                        <button className="Navbar-Desk-nav-left-icons-buttons">
                                            <img src={icon} alt={"Ícone de eventos."} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="Navbar-Desk-nav-right">
                                <div className="Navbar-Desk-nav-right-search">
                                    {
                                        showSearch ?
                                            <div className="Navbar-Desk-search-box-true">
                                                <div className="Navbar-Desk-true-input">
                                                    <input type="text" placeholder="    Pesquisar . . ." />
                                                </div>

                                                <button className="Navbar-Desk-search-button" onClick={() => setShowSearch(!showSearch)}>
                                                    <img src={searchIconRed} alt={"Ícone de pesquisa."} />
                                                </button>
                                            </div>
                                        :
                                            <div className="Navbar-Desk-search-box-false">
                                                <div className="Navbar-Desk-false-input">
                                                    <input readOnly/>
                                                </div>

                                                <button className="Navbar-Desk-search-button" onClick={() => setShowSearch(!showSearch)}>
                                                    <img src={searchIcon} alt={"Ícone de pesquisa."} />
                                                </button>
                                            </div>  
                                    }
                                </div>

                                <div className="Navbar-Desk-nav-right-icons">
                                    <div className="Navbar-Desk-nav-right-icons-notify">
                                        <button className="Navbar-Desk-nav-right-icons-buttons">
                                            <img src={icon} alt={"Ícone de notificações."} />
                                        </button>
                                    </div>

                                    <div className="Navbar-Desk-nav-right-icons-message">
                                        <button className="Navbar-Desk-nav-right-icons-buttons">
                                            <img src={icon} alt={"Ícone de mensagens."} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Navbar-Desk-logo">
                            <img src={logo} alt={"Logo da TECHPOT."} />
                        </div>
                    </div>
            }
        </div>
    );
};

export default Navbar;
