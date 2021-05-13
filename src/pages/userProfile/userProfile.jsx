/* eslint-disable eqeqeq */
import React, { useState } from "react";
import "./userProfile.css";


/* COMPONENTS */
import UserInfoNavItemList from "./components/userInfoNavItemList/userInfoNavItemList.jsx";
import UserOverview from "./components/userOverview/userOverview.jsx";


/* IMAGES */
import profileBackgroundImage from "../../assets/profileBackgroundImage.jpg";
import userProfilePlaceholder from "../../assets/userProfilePlaceholder.jpg";


/* ICONS */
import icon from "../../assets/icone_lupa.png";


/* USER PROFILE PAGE */
const UserProfile = () => {
    // User Info Navigation
    const [ currentNav, setCurrentNav ] = useState("1");

    const handleClick = (event) => {
        console.log(event.target.key);
        setCurrentNav(event.target.key);
    };

    const getNavContent = (current) => {
        switch(current) {
            case "1":
                return <UserOverview/>;
            case "2":
                return <div style={{
                    height: "25px", width: "50px", backgroundColor: "#cccccc"
                }}></div>;
            case "3":
                return null;
            case "4":
                return null;
            default:
                break;
        }
    };


    return(
        <div className="UserProfile">
            {/* BACKGROUND IMAGE AND PROFILE PHOTO */}
            <div className="graphical">
                <div className="background">
                    <img className="backgroundImg" src={profileBackgroundImage} alt="Imagem de fundo do perfil do usuário." />
                    <code className="friendCount">0</code>
                </div>

                <div className="profileImg">
                    <img className="userImg" src={userProfilePlaceholder} alt="Imagem de perfil do usuário." />
                </div>
            </div>


            {/* NAME AND IDENDITY */}
            <div className="profileId">
                <h2>João Kitajima</h2>
                <h3>@kitajima</h3>
                <span>Sistemas de Informação</span>
            </div>
            

            {/* USER INFO NAVIGATION */}
            <div className="userInfoNav">
                <div className="listNav">
                    <UserInfoNavItemList key="1" icon={icon} title={"Visão Geral"} alt={"Ícone X."} clickEvent={() => setCurrentNav("1")} isSelected={currentNav == "1" ? true : false} />
                    <UserInfoNavItemList key="2" icon={icon} title={"Grupos"} alt={"Ícone X."} clickEvent={() => setCurrentNav("2")} isSelected={currentNav == "2" ? true : false} />
                    <UserInfoNavItemList key="3" icon={icon} title={"Amigos"} alt={"Ícone X."} clickEvent={() => setCurrentNav("3")} isSelected={currentNav == "3" ? true : false} />
                    <UserInfoNavItemList key="4" icon={icon} title={"Portfolio"} alt={"Ícone X."} clickEvent={() => setCurrentNav("4")} isSelected={currentNav == "4" ? true : false} />
                </div>

                <div className="content">
                    {getNavContent(currentNav)}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
