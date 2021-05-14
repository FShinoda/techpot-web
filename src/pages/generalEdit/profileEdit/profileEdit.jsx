import React from 'react';
import "antd/dist/antd.css";
import './style.css';

// Assets
import userPlaceholder from '../../../assets/userPlaceholder.jpg';
import profileBackgroundImage from '../../../assets/profileBackgroundImage.jpg';


// Components
import EditHeader from '../components/editHeader/editHeader.jsx';
import UpdateImageModal from "../components/updateImgModal/updateImgModal.jsx";


const ProfileEdit = () =>{
    return(
        <div className="ProfileEdit">
            <EditHeader title="Meu perfil"/>

            <div className="ProfileEdit-container">
                {/* Preview - banner + foto do usuario + name + username*/}
                <div className="ProfileEdit-preview">
                    <div className="ProfileEdit-graphical">
                        <div className="ProfileEdit-background">
                            {/* Background img */}
                            <div className="ProfileEdit-bg-update">
                                <UpdateImageModal />
                            </div>
                            <img className="ProfileEdit-backgroundImg" src={profileBackgroundImage} alt="Imagem de fundo do perfil do usuário." />
                            
                        </div>
                        <div className="ProfileEdit-profileImg">
                            {/* Profile img */}
                            <img className="ProfileEdit-userImg" src={userPlaceholder} alt="Imagem de perfil do usuário." />
                        </div>
                    </div>
                    <div className="ProfileEdit-profileId">
                        {/* Fullname */}
                        <h2>João Kitajima</h2>
                        {/* Username */}
                        <h3>@Jotajima</h3>
                    </div>
                </div>

                {/* Formulário de edição do perfil */}
                <div className="ProfileEdit-edit">
                    {/* Forms */}
                    <form className="ProfileEdit-form">
                        {/* Fullname */}
                        <label for="ProfileEdit-input-fullname">Nome:</label>
                        <input id="ProfileEdit-input-fullname" /* maxLength={} */ type="text" className="ProfileEdit-input" value="[fullname]"/>
                        {/* Username */}
                        <label for="ProfileEdit-input-username">Nome de usuário:</label>
                        <input id="ProfileEdit-input-username" /* maxLength={} */ type="text" className="ProfileEdit-input" value="[username]"/>
                        {/* Bio */}
                        <label for="ProfileEdit-input-bio">Bio:</label>
                        <textarea id="ProfileEdit-input-username" /* maxLength={} */ type="text" className="ProfileEdit-input ProfileEdit-bio">[bio]</textarea>

                        <button type="submit" className="ProfileEdit-submit">Salvar</button>
                    </form>
                </div>


                

            </div>
        </div>
    )
}

export default ProfileEdit;