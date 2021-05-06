import React, {useState} from 'react';
import './style.css';

// assets
import UserImg from '../../../../assets/userPlaceholder.jpg';

const EditProfile = ({fullname, username}) =>{

    const [newFullname, setNewFullname] = useState(fullname);
    const [newUsername, setNewUsername] = useState(username);

    return(
        <div className="EditProfile">
            <div className="editProfile-show">
                <img src={UserImg} alt="foto de perfil atual"/>
                <div className="editUser-names">
                    <p className="fullname">{newFullname ? newFullname : "⠀"}</p>
                    <p className="username">@{newUsername}</p>
                </div>
            </div>
            <form className="editUser-form">
                <div className="editUser-edit">
                    <label for="fullname">Nome</label>
                    <input type="text" id="fullname" placeholder="nome completo" value={newFullname} onChange={e => setNewFullname(e.target.value)}/>
                </div>
                <div className="editUser-edit">
                    <label for="username">Nome de usuário</label>
                    <input type="text" id="username" placeholder="usuário" value={newUsername}  onChange={e => setNewUsername(e.target.value)} />
                </div>
                <div className="editUser-edit">
                    <label for="bio">Bio</label>
                    <textarea id="bio"/>
                </div>

                <div className="editUser-edit">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" placeholder="e-mail para contato"/>
                </div>
            </form>
            

        </div>
    )
};

export default EditProfile;