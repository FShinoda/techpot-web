import React, { useState, useEffect } from "react";
import "./userProfile.css";


/* COMPONENTS */
import UserInfoNavItemList from "./components/userInfoNavItemList/userInfoNavItemList.jsx";
import UserOverview from "./components/userOverview/userOverview.jsx";
import UserGroupTab from "./components/userGroupTab/userGroupTab.jsx";
import UserFriendTab from "./components/userFriendTab/userFriendTab.jsx";
import UserPortfolio from "./components/userPortfolio/userPortfolio.jsx";


/* IMAGES */
import profileBackgroundImage from "../../assets/profileBackgroundImage.jpg";
import userProfilePlaceholder from "../../assets/userProfilePlaceholder.jpg";


/* ICONS */
import icon from "../../assets/icone_lupa-branco.png";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { userInfo, USER_INFO_CLEANUP } from '../../store/_entities/User';

// React Router
import { useParams } from 'react-router-dom';

// Helpers
import { formatUserName } from '../../helpers/formatUserName';
import { firstLetterUppercase } from '../../helpers/UpperFirstLetter';

/* USER PROFILE PAGE */
const UserProfile = () => {
    const dispatch = useDispatch();
    
    const { id } = useParams();
    
    const user_id = useSelector(state => state.entitie.user.id);
    const user_profile = useSelector((state) => state.entitie.user.profile);
    const other_user_profile = useSelector(state => state.entitie.user.otherUserProfile);
    
    const [ currentNav, setCurrentNav ] = useState("1");
    const [ isUserProfile, setIsUserProfile ] = useState(user_id === parseInt(id))
    const [ friendStatus, setFriendStatus ] = useState("notFriend");

    useEffect(() => {
        if (!isUserProfile) {
            dispatch(userInfo(id, false));
        }

        return () => {
            dispatch(USER_INFO_CLEANUP());
        }

    }, [dispatch])

    const getNavContent = (current) => {
        switch(current) {
            case "1":
                return <UserOverview user_profile={isUserProfile ? user_profile : other_user_profile}/>;
            case "2":
                return <UserGroupTab />;
            case "3":
                return <UserFriendTab />;
            case "4":
                return <UserPortfolio name={"JOÃO KITAJIMA"} spec={"Analista de Piadas Ruins"} />;
            default:
                break;
        }
    };

    return(
        <div className="UserProfile">
            {/* BACKGROUND IMAGE AND PROFILE PHOTO */}
            <div className="UserProfile_graphical">
                <div className="UserProfile_background">
                    <img className="UserProfile_backgroundImg" src={profileBackgroundImage} alt="Imagem de fundo do perfil do usuário." />
                    <div className="UserProfile_middleSection">
                        <code className="UserProfile_friendCount">0 </code>
                        {
                            friendStatus == "notFriend"
                            ?
                                <button className="UserProfile_defaultFriend" onClick={() => setFriendStatus("sendingFriend")}>
                                    <img src={icon} alt="Adicionar nova amizade." />
                                    <span>Adicionar</span>
                                </button>
                            :
                                friendStatus == "sendingFriend"
                                ?
                                    <button className="UserProfile_defaultFriend UserProfile_sendingFriend" onClick={() => setFriendStatus("isFriend")}>
                                        <img src={icon} alt="Cancelar solicitação." />
                                        <span>Cancelar solicitação</span>
                                    </button>
                                :
                                    <button className="UserProfile_defaultFriend UserProfile_isFriend" onClick={() => setFriendStatus("notFriend")}>
                                        <img src={icon} alt="Desfazer amizade." />
                                        <span>Desfazer amizade</span>
                                    </button>
                        }
                    </div>
                </div>

                <div className="UserProfile_profileImg">
                    <img className="UserProfile_userImg" src={userProfilePlaceholder} alt="Imagem de perfil do usuário." />
                </div>
            </div>


            {/* NAME AND IDENDITY */}
            <div className="UserProfile_profileId">
                <h2>{isUserProfile ? user_profile.u ? formatUserName(user_profile.u.name)  : "Usuario" : other_user_profile.u ? formatUserName(other_user_profile.u.name)  : "Usuario" }</h2>
                <h3>@{isUserProfile ? user_profile.u ? user_profile.u.username  : "Usuario" : other_user_profile.u ? other_user_profile.u.username  : "Usuario" }</h3>
            </div>
            

            {/* USER INFO NAVIGATION */}
            <div className="UserProfile_userInfoNav">
                <div className="UserProfile_listNav">
                    <UserInfoNavItemList icon={icon} title={"Visão Geral"} alt={"Ícone de Visão Geral."} clickEvent={() => setCurrentNav("1")} isSelected={currentNav == "1" ? true : false} />
                    <UserInfoNavItemList icon={icon} title={"Grupos"} alt={"Ícone de Grupos."} clickEvent={() => setCurrentNav("2")} isSelected={currentNav == "2" ? true : false} />
                    <UserInfoNavItemList icon={icon} title={"Amigos"} alt={"Ícone de Amigos."} clickEvent={() => setCurrentNav("3")} isSelected={currentNav == "3" ? true : false} />
                    <UserInfoNavItemList icon={icon} title={"Portfolio"} alt={"Ícone de Portfolio."} clickEvent={() => setCurrentNav("4")} isSelected={currentNav == "4" ? true : false} />
                </div>

                <div className="UserProfile_content">
                    {getNavContent(currentNav)}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
