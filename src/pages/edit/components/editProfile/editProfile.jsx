import React, {useState} from 'react';
import './style.css';

// assets
import UserImg from '../../../../assets/userPlaceholder.jpg';

const EditProfile = ({fullname, username, bio, city, state}) =>{

    const [newFullname, setNewFullname] = useState(fullname);
    const [newUsername, setNewUsername] = useState(username);
    const [newBio, setNewBio] = useState(bio);
    const [newCity, setNewCity] = useState(city);
    const [newState, setNewState] = useState(state);
    

    return(
        <div className="EditProfile">
            <div className="editProfile-show">
                <img src={UserImg} alt="foto de perfil atual"/>
                <div className="editUser-cardNames">
                    <p className="fullname">{newFullname ? newFullname : "⠀"}</p>
                    <p className="username">@{newUsername}</p>
                </div>
                <div className="editUser-card-info">
                    <p className="user-type">Estudante</p>
                    <p className="bio">{newBio}</p>
                    <p className="local">{newCity ? (newState ? (`${newCity}, ${newState}`) : newCity) : newState}</p>
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
                    <textarea id="bio" value={newBio} onChange={e => setNewBio(e.target.value)} />
                </div>

                <div className="editUser-edit">
                    <label for="city">Cidade</label>
                    <input type="text" id="city" placeholder="ex: Santo André" value={newCity} onChange={e => setNewCity(e.target.value)}/>
                </div>
                <div className="editUser-edit">
                    <label for="state">Estado</label>
                    <input type="text" id="state" placeholder="ex: São Paulo" value={newState} onChange={e => setNewState(e.target.value)}/>
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