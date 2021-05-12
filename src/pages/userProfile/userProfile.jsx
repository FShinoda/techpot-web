/* eslint-disable eqeqeq */
import React, { useState } from "react";
import "./userProfile.css";


/* COMPONENTS */
import UserInfoNavItemList from "./components/userInfoNavItemList/userInfoNavItemList.jsx";


/* IMAGES */
import profileBackgroundImage from "../../assets/profileBackgroundImage.jpg";
import userProfilePlaceholder from "../../assets/userProfilePlaceholder.jpg";


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
                return <div style={{
                    height: "25px", width: "50px", backgroundColor: "#d0094d"
                }}></div>;
            case "2":
                return <div style={{
                    height: "25px", width: "50px", backgroundColor: "#361d04"
                }}></div>;
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
                </div>

                <div className="profileImg">
                    <img className="userImg" src={userProfilePlaceholder} alt="Imagem de perfil do usuário." />
                </div>
            </div>


            {/* NAME AND IDENDITY */}
            <div className="profileId">
                <h2>Nome Sobrenome</h2>
                <h3>@username</h3>
                <span>Sistemas de Informação</span>
            </div>
            

            {/* USER INFO NAVIGATION */}
            <div className="userInfoNav">
                <div className="listNav">
                    <UserInfoNavItemList key="1" title={"Visão Geral"} clickEvent={() => setCurrentNav("1")} isSelected={currentNav == "1" ? true : false} />
                    <UserInfoNavItemList key="2" title={"Sobre"} clickEvent={() => setCurrentNav("2")} isSelected={currentNav == "2" ? true : false} />
                </div>

                <div className="content">
                    {getNavContent(currentNav)}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
