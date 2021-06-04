import React, { useState, useRef } from "react";
import "./navbar.css";
import "../../../node_modules/antd/dist/antd.css"; // TODO -> Review this import

/* ANT DESIGN */
import { Drawer } from "antd";

import { Link } from "react-router-dom";

/* IMAGES */
import logo from "../../assets/logo-redborder.png";
import icon from "../../assets/icone_grupo.png";
import searchIcon from "../../assets/icone_lupa-branco.png";
import searchIconRed from "../../assets/icone_lupa.png";
import iconUser from "../../assets/icon_user.png";
import iconEvent from "../../assets/icone_evento.png";
import iconMessage from "../../assets/icon_message.png";
import iconNotification from "../../assets/icon_notification.png";

/* ICONS */
import { FiMenu } from "react-icons/fi";
import { DoubleRightOutlined } from "@ant-design/icons";
import { ImSearch } from "react-icons/im";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Helpers
import { formatUserName } from "../../helpers/formatUserName";

// Components
import ModalUserPreferences from "../ModalUserPreferences";
import UserProfileImg from "../UserProfileImg"


/* NAVBAR */
const Navbar = () => {
  // Mobile ( < 1024px) or Desktop ( >= 1024px) Design
  const isMobile = false;

  // Mobile Itens
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showModalUserPreferences, setShowModalUserPreferences] = useState(false);
  const [anchorLeft, setAnchorLeft] = useState(null);
  const [anchorTop, setAnchorTop] = useState(null);

  const modalUserPreferencesRef = useRef();

  const user_profile = useSelector((state) => state.entitie.user.profile);

  const openModalUserPreferences = (e) => {
    setShowModalUserPreferences(!showModalUserPreferences);

    // Pegando a posicao do icone
    const postion = modalUserPreferencesRef.current.getBoundingClientRect();
    setAnchorLeft(postion.left);
    setAnchorTop(postion.bottom);
  };

  return (
    <>
      {showModalUserPreferences && (
        <ModalUserPreferences
          anchorLeft={anchorLeft}
          anchorTop={anchorTop}
          onClose={() => setShowModalUserPreferences(!showModalUserPreferences)}
        />
      )}
      <div className="navbar-container">
      <div className="Navbar">
        {isMobile ? (
          <div className="Navbar-Mob">
            <div className="Navbar-Mob-menu">
              <button onClick={() => setShowMenu(!showMenu)}>
                <FiMenu />
              </button>

              {showMenu ? (
                <Drawer
                  className="Navbar-Mob-menu-drawer"
                  title="TECHPOT"
                  placement={"left"}
                  closable={true}
                  onClose={() => setShowMenu(!showMenu)}
                  visible={true}
                  zIndex={9999}
                  headerStyle={{
                    backgroundColor: "#d0094d",
                    border: "none",
                    boxShadow: "0px 4px 4px 0px rgba(22, 22, 22, 0.2)",
                    borderRadius: "0px",
                  }}
                >
                  <button className="Navbar-Mob-menu-drawer-button">
                    <Link className="link-counter" to={"/perfil"}>
                      <div className="Nav-drawer-left">
                        {/* <img src={iconUser} alt={""} /> */}
                        <h6>Meu Perfil</h6>
                      </div>

                      <div className="Nav-drawer-right">
                        <DoubleRightOutlined />
                      </div>
                    </Link>
                  </button>

                  <button className="Navbar-Mob-menu-drawer-button">
                    <Link className="link-counter" to={"/grupos"}>
                      <div className="Nav-drawer-left">
                        {/* <img src={icon} alt={""} /> */}
                        <h6>Grupos</h6>
                      </div>

                      <div className="Nav-drawer-right">
                        <DoubleRightOutlined />
                      </div>
                    </Link>
                  </button>

                  <button className="Navbar-Mob-menu-drawer-button">
                    <Link className="link-counter" to={"/eventos"}>
                      <div className="Nav-drawer-left">
                        {/* <img src={iconEvent} alt={""} /> */}
                        <h6>Eventos</h6>
                      </div>

                      <div className="Nav-drawer-right">
                        <DoubleRightOutlined />
                      </div>
                    </Link>
                  </button>

                  <button className="Navbar-Mob-menu-drawer-button">
                    <Link className="link-counter" to={"/"}>
                      <div className="Nav-drawer-left">
                        {/* <img src={iconMessage} alt={""} /> */}
                        <h6>Mensagens</h6>
                      </div>

                      <div className="Nav-drawer-right">
                        <DoubleRightOutlined />
                      </div>
                    </Link>
                  </button>

                  <button className="Navbar-Mob-menu-drawer-button">
                    <Link className="link-counter" to={"/"}>
                      <div className="Nav-drawer-left">
                        {/* <img src={iconNotification} alt={""} /> */}
                        <h6>Notificações</h6>
                      </div>

                      <div className="Nav-drawer-right">
                        <DoubleRightOutlined />
                      </div>
                    </Link>
                  </button>

                  <button className="Navbar-Mob-menu-drawer-button">
                    <Link className="link-counter" to={"/editar"}>
                      <div className="Nav-drawer-left">
                        {/* <img src={icon} alt={""} /> */}
                        <h6>Configurações</h6>
                      </div>

                      <div className="Nav-drawer-right">
                        <DoubleRightOutlined />
                      </div>
                    </Link>
                  </button>
                </Drawer>
              ) : null}
            </div>

            <div className="Navbar-Mob-logo">
              <img src={logo} alt={"Logo da TECHPOT."} />
            </div>

            <div className="Navbar-Mob-search">
              <button
                className="Navbar-Mob-search-button"
                onClick={() => setShowSearch(!showSearch)}
              >
                <img src={searchIcon} alt={"Ícone de busca."} />
              </button>

              {showSearch ? (
                <Drawer
                  className="Navbar-Mob-search-drawer"
                  title="PESQUISAR"
                  placement={"right"}
                  closable={true}
                  onClose={() => setShowSearch(!showSearch)}
                  visible={true}
                  zIndex={9999}
                  headerStyle={{
                    backgroundColor: "#d0094d",
                    border: "none",
                    boxShadow: "0px 4px 4px 0px rgba(22, 22, 22, 0.2)",
                    borderRadius: "0px",
                  }}
                >
                  <div className="Navbar-Mob-search-drawer-bar">
                    <div className="Navbar-Mob-search-drawer-bar-icon">
                      <ImSearch />
                    </div>

                    <input type="text" placeholder="    Pesquisar . . ." />
                  </div>

                  <div className="Navbar-Mob-search-drawer-sug">
                    <h3>Sugestões</h3>
                  </div>
                </Drawer>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="Navbar-Desk">
            <div className="Navbar-Desk-nav">
              <div className="Navbar-Desk-nav-left">
                <div className="Navbar-Desk-nav-left-user">
                  <div
                    className="Navbar-Desk-nav-left-user-button"
                    onClick={openModalUserPreferences}
                    ref={modalUserPreferencesRef}
                  >
                    <div
                      className="link-counter link-User"
                      onClick={openModalUserPreferences}
                      ref={modalUserPreferencesRef}
                    >
                      <div className="NavbarProfilePicContainer">
                        <UserProfileImg />
                      </div>
                      <h4>
                        {user_profile.u
                          ? formatUserName(user_profile.u.name)
                          : " "}
                      </h4>
                    </div>
                  </div>
                </div>
                {/* 
              <div className="Navbar-Desk-nav-left-icons">
                <div className="Navbar-Desk-nav-left-icons-config">
                  <button className="Navbar-Desk-nav-left-icons-buttons">
                    <Link className="link-counter" to={"/editar"}>
                      <img src={icon} alt={"Ícone de configurações."} />
                    </Link>
                  </button>
                </div>

                <div className="Navbar-Desk-nav-left-icons-groups">
                  <button className="Navbar-Desk-nav-left-icons-buttons">
                    <Link className="link-counter" to={"/grupos"}>
                      <img src={icon} alt={"Ícone de grupos."} />
                    </Link>
                  </button>
                </div>

                <div className="Navbar-Desk-nav-left-icons-events">
                  <button className="Navbar-Desk-nav-left-icons-buttons">
                    <Link className="link-counter" to={"/eventos"}>
                      <img src={iconEvent} alt={"Ícone de eventos."} />
                    </Link>
                  </button>
                </div>
              </div> */}
              </div>

              <div className="Navbar-Desk-nav-right">
                <div className="Navbar-Desk-nav-right-search">
                  {showSearch ? (
                    <div className="Navbar-Desk-search-box-true">
                      <div className="Navbar-Desk-true-input">
                        <input type="text" placeholder="    Pesquisar . . ." />
                      </div>

                      <button
                        className="Navbar-Desk-search-button"
                        onClick={() => setShowSearch(!showSearch)}
                      >
                        <img src={searchIconRed} alt={"Ícone de pesquisa."} />
                      </button>
                    </div>
                  ) : (
                    <div className="Navbar-Desk-search-box-false">
                      <div className="Navbar-Desk-false-input">
                        <input readOnly />
                      </div>

                      <button
                        className="Navbar-Desk-search-button"
                        onClick={() => setShowSearch(!showSearch)}
                      >
                        <img src={searchIcon} alt={"Ícone de pesquisa."} />
                      </button>
                    </div>
                  )}
                </div>

                <div className="Navbar-Desk-nav-right-icons">
                  <div className="Navbar-Desk-nav-right-icons-notify">
                    <button className="Navbar-Desk-nav-right-icons-buttons">
                      <Link className="link-counter" to={"/"}>
                        <img
                          src={iconNotification}
                          alt={"Ícone de notificações."}
                        />
                      </Link>
                    </button>
                  </div>

                  <div className="Navbar-Desk-nav-right-icons-message">
                    <button className="Navbar-Desk-nav-right-icons-buttons">
                      <Link className="link-counter" to={"/"}>
                        <img src={iconMessage} alt={"Ícone de mensagens."} />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="Navbar-Desk-logo">
              <img src={logo} alt="Logo da TECHPOT." />
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default Navbar;
