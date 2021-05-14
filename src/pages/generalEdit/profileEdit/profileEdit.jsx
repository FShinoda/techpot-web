import React from 'react';
import "antd/dist/antd.css";
import './style.css';

// Assets
import userPlaceholder from '../../../assets/userPlaceholder.jpg';
import profileBackgroundImage from '../../../assets/profileBackgroundImage.jpg';


// Components
import EditHeader from '../components/editHeader/editHeader.jsx';
import UpdateImageModal from "../components/updateImgModal/updateImgModal.jsx";


const ProfileEdit = ({}) =>{
    return(
        <div className="ProfileEdit">
            <EditHeader title="Meu perfil"/>

            <div className="ProfileEdit-container">
                {/* Preview - banner + foto do usuario + name + username*/}
                <div className="ProfileEdit-preview">
                    <div className="ProfileEdit-graphical">
                        <div className="ProfileEdit-background">
                            {/* Background img */}
                            <img className="ProfileEdit-backgroundImg" src={profileBackgroundImage} alt="Imagem de fundo do perfil do usuário." />
                            <UpdateImageModal className="ProfileEdit-bg-update"/>
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
                        <h3>@kitajima</h3>
                    </div>
                </div>

                {/* Formulário de edição do perfil */}
                <div className="ProfileEdit-edit">
                    <form>
                        <label for="">Nome</label>
                        <input type="text"/>
                    </form>
                </div>


                

            </div>
        </div>
    )
}

export default ProfileEdit;