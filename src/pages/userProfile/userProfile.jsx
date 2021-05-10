import React from "react";
import "antd/dist/antd.css";
import "./userProfile.css";


/* COMPONENTS */
import UpdateImageModal from "./components/updateImageModal/updateImageModal.jsx";


/* IMAGES */
import profileBackgroundImage from "../../assets/profileBackgroundImage.jpg";
import userProfilePlaceholder from "../../assets/userProfilePlaceholder.jpg";


/* ICONS */
//


/* USER PROFILE PAGE */
const UserProfile = () => {
    // Owner or Guest Verification
    let isOwner = true;


    // Friend Verification
    let isFriend = true;


    return(
        <div className="UserProfile">
            
            
            {/* BACKGROUND IMAGE AND PROFILE PHOTO */}
            <div className="graphical">
                <div className="background">
                    <img className="backgroundImg" src={profileBackgroundImage} alt="Imagem de fundo do perfil do usuário." />
                    {
                        isOwner
                        ?
                            <div className="backgroundImgCameraIcon">
                                <UpdateImageModal />
                            </div> 
                        :
                            null
                    }
                </div>

                <div className="profileImg">
                    <img className="userImg" src={userProfilePlaceholder} alt="Imagem de perfil do usuário." />
                    {
                        isOwner
                        ?
                            <div className="profilePhoto flex-center">
                                <UpdateImageModal />
                            </div>
                        :
                            null
                    }

                    {
                        isFriend
                        ?
                            null
                        :
                            <div className="iconAdd flex-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="iconAddSymbol">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                    }
                </div>
            </div>


            {/* NAME AND IDENDITY */}
            <div className="profileId">
                <h2>Nome Sobrenome</h2>
                <span>Sistemas de Informação</span>
            </div>
        </div>
    );
};

export default UserProfile;
