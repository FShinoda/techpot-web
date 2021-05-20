/* eslint-disable eqeqeq */
import React, { useState } from "react";
import "./group.css";


/* COMPONENTS */
import GroupNavItemList from "./components/groupNavItemList/groupNavItemList.jsx";
import GroupMembersTab from "./components/groupMembersTab/groupMembersTab.jsx";
import GroupEventsTab from "./components/groupEventsTab/groupEventsTab.jsx";
import GroupAboutTab from "./components/groupAboutTab/groupAboutTab.jsx";
import Criarpost from "../../components/criarpost/criarpost.jsx";
import Post from "../../components/post/post.jsx";


/* IMAGES */
import racional from "../../assets/tim-maia_racional.jpg";


/* ICONS */
import { GlobalOutlined, LockOutlined } from "@ant-design/icons";
import icon from "../../assets/icone_lupa-branco.png";
import icon2 from "../../assets/icone_lupa-azul.png";


/* GROUP PAGE */
const Group = () => {
    // Group Scope Definition
    const isPublic = true;


    // Group Nav
    const [ currentNav, setCurrentNav ] = useState("feed");

    const getNavContent = (current) => {
        switch(current) {
            case "feed":
                return(
                    <div className="groupFeed">
                        <Criarpost />
                        <Post />
                    </div>
                );
            case "about":
                return <GroupAboutTab groupCreationDate={"20/03/2021"} creatorName={"Antonio Kzeriar"} adminName={"Antonio Kzeriar"} membersCount={"206"} postCount={"13"} newMembersCount={"4"} />;
            case "events":
                return <GroupEventsTab />;
            case "members":
                return <GroupMembersTab />;
            default:
                break;
        }
    };


    return(
        <div className="Group">
            {/* BANNER AND GROUP INFO */}
            <div className="Group-top">
                <div className="Group-banner">
                    <img src={racional} alt={"Foto do Grupo."} />
                </div>

                <div className="Group-id">
                    <h1 className="Group-name">Universo em Desencanto: O Contato com o Mundo Racional</h1>
                    <div className="Group-type">
                        <div className="Group-type-left">
                            {
                                isPublic
                                ?
                                    <div className="Group-type public">
                                        <GlobalOutlined />
                                        <h6>Público &#160;</h6>
                                    </div>
                                :
                                    <div className="Group-type private">
                                        <LockOutlined />
                                        <h6>Privado &#160;</h6>
                                    </div>
                            }
                            <span className="Group-membersCount">128&#160;</span>
                        </div>

                        <div className="Group-type-right">
                            <button>PARTICIPAR</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEXT */}
            <div className="Group-infoNav">
                <div className="Group-navbar">
                    <GroupNavItemList icon={icon} icon2={icon2} title={"Visão Geral"} alt={"Ícone de Visão Geral."} clickEvent={() => setCurrentNav("feed")} isSelected={currentNav == "feed" ? true : false} />
                    <GroupNavItemList icon={icon} icon2={icon2} title={"Sobre"} alt={"Ícone de Sobre."} clickEvent={() => setCurrentNav("about")} isSelected={currentNav == "about" ? true : false} />
                    <GroupNavItemList icon={icon} icon2={icon2} title={"Eventos"} alt={"Ícone de Eventos."} clickEvent={() => setCurrentNav("events")} isSelected={currentNav == "events" ? true : false} />
                    <GroupNavItemList icon={icon} icon2={icon2} title={"Membros"} alt={"Ícone de Membros."} clickEvent={() => setCurrentNav("members")} isSelected={currentNav == "members" ? true : false} />
                </div>

                <div className="Group-content">
                    { getNavContent(currentNav) }
                </div>
            </div>
        </div>
    );
};

export default Group;
