import React from 'react';
import './style.css';

// Assets
import userPlaceholder from '../../../assets/userPlaceholder.jpg';
import profileBackgroundImage from '../../../assets/profileBackgroundImage.jpg';


// Components
import EditHeader from '../components/editHeader/editHeader';



const ProfileEdit = () =>{
    return(
        <div className="ProfileEdit">
            <EditHeader title="Meu perfil"/>

            <div className="ProfileEdit-container">
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
                
            </div>
        </div>
    )
}

export default ProfileEdit;