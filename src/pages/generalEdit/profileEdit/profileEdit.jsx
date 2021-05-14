import React from 'react';
<<<<<<< HEAD
import "antd/dist/antd.css";
=======
>>>>>>> 25a674d... edit mobile pages init
import './style.css';

// Assets
import userPlaceholder from '../../../assets/userPlaceholder.jpg';
import profileBackgroundImage from '../../../assets/profileBackgroundImage.jpg';


// Components
<<<<<<< HEAD
import EditHeader from '../components/editHeader/editHeader.jsx';
import UpdateImageModal from "../components/updateImgModal/updateImgModal.jsx";


const ProfileEdit = ({}) =>{
=======
import EditHeader from '../components/editHeader/editHeader';



const ProfileEdit = () =>{
>>>>>>> 25a674d... edit mobile pages init
    return(
        <div className="ProfileEdit">
            <EditHeader title="Meu perfil"/>

            <div className="ProfileEdit-container">
<<<<<<< HEAD
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
                    <form className="ProfileEdit-form">
                        <label for="">Nome</label>
                        <input type="text" className="ProfileEdit-input"/>
                    </form>
                </div>


                

=======
                <div className="ProfileEdit-preview">
                    <div className="graphical">
                        <div className="background">
                            <img className="backgroundImg" src={profileBackgroundImage} alt="Imagem de fundo do perfil do usuário." />
                            <code className="friendCount">0</code>
                        </div>

                        <div className="profileImg">
                            <img className="userImg" src={userPlaceholder} alt="Imagem de perfil do usuário." />
                        </div>
                    </div>
                </div>
                
>>>>>>> 25a674d... edit mobile pages init
            </div>
        </div>
    )
}

export default ProfileEdit;