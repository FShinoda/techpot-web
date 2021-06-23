import React from 'react';
import './style.css';
import { Input } from 'antd';

// Components
import UpdateImgModal from '../updateImgModal/updateImgModal.jsx'

// Icons
import { UserOutlined, MailOutlined , AuditOutlined, LockOutlined, SmileOutlined } from '@ant-design/icons';

// Assets
import bgPlaceholder from '../../../../assets/profileBackgroundImage.jpg'
import profilePlaceholder from '../../../../assets/img/userPlaceholder.jpg';

const OptionProfile = ({ user_profile }) => {
    return (
        <div className="OptionProfile">
            <forms>
                <div className="OptionProfile-card-edit-content-name-div">
                    <div className="div-flex-column div-padding-x OptionProfile-card-edit-name">
                        <label className="OptionProfile-label">Nome</label>
                        <Input size="large" placeholder="Nome Completo" disabled prefix={<UserOutlined />} value={user_profile ? user_profile.u.name : " "}/>
                    </div>
                    <div className="div-flex-column div-padding-x OptionProfile-card-edit-username">
                        <label className="OptionProfile-label">Usuário</label>
                        <Input size="large" placeholder="Nome de Usuário" disabled prefix={<UserOutlined />} value={user_profile ? user_profile.u.username : " "} />
                    </div>
                </div>
                <div className="div-padding-x">
                    <label className="OptionProfile-label">E-mail</label>
                    <Input size="large" placeholder="Nome de Usuário" disabled prefix={<MailOutlined  />} value={user_profile ? user_profile.u.email : " "} />
                </div>
                <div className="div-padding-x">
                    <label className="OptionProfile-label">Bio</label>
                    <textarea disabled placeholder="Escreva sobre você...">
                    </textarea>
                </div>


                <div className="div-padding-x">
                    <button disabled className="OptionProfile-submit">Salvar</button>
                </div>


            </forms>
            <div className="OptionProfile-card-preview">
                <div className="OptionProfile-card-preview-main">
                    <div className="OptionProfile-card-preview-bg">
                        <img src={bgPlaceholder} />
                        <div className="OptionProfile-card-preview-bg-icon">
                            <UpdateImgModal title="background" />
                        </div>

                    </div>
                    <div className="OptionProfile-card-preview-profile-img">
                        <img src={profilePlaceholder} />
                    </div>
                    <div className="OptionProfile-card-preview-content"><UpdateImgModal title="perfil" clickText="alterar foto de perfil" /></div>


                </div>
            </div>
        </div>
    )
}

export default OptionProfile;