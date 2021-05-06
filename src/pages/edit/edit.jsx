import React, { useState } from 'react'
import './style.css'

// Components
import MenuItem from './components/menuItem/menuItem';
import EditItem from './components/editItem/editItem';

import EditPerfil from './components/editProfile/editProfile';

const Edit = () => {

    const [currentNav, setCurrentNav] = useState("1");


    const handleClick = (event) => {
        console.log(event.target.key);
        setCurrentNav(event.target.key);
    }

    const getNavContent = (current) => {
        switch (current) {
            case "1":
                return <EditPerfil fullname={"João da Silva Peixe"} username={"jopeix33"}/>;
            case "2":
                return "Bom dia";
            default: 
                return "A configurar";
        }
    }

    return (
        <div className="Edit">
            <div className="edit-sidebar">
                <MenuItem>
                    {/* Estou pesquisando como pegar a propriedade key para usar apenas o handle click*/}
                    <EditItem key="1" titulo="Editar Perfil" clickEvent={() => setCurrentNav("1")}/> 
                    <EditItem key="2" titulo="Portifolio" clickEvent={() => setCurrentNav("2")}/>
                    <EditItem key="3" titulo="Privacidade" clickEvent={() => setCurrentNav("3")}/>
                </MenuItem>
                
            </div>
            <div className="edit-content">
                {getNavContent(currentNav)}
            </div>
        </div>
        
    );
}


export default Edit;