/* eslint-disable eqeqeq */
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
                return <EditPerfil fullname={"João da Silva Peixe"} username={"jopeix33"} bio={"Gosto de programar e de pescar"} city={"Poá"} state={"São Paulo"} occupation={"Estudante"}/>;
            case "2":
                return "Bom dia 2";
            case "3":
                return "Boa Noite 3"
            default: 
                return "A configurar";
        }
    }

    return (
        <div className="Edit">
            <div className="edit-sidebar">
                <MenuItem>
                    {/* Estou pesquisando como pegar a propriedade key para usar apenas o handle click*/}
                    <EditItem key="1" titulo="Editar Perfil" clickEvent={() => setCurrentNav("1")} isSelected={currentNav == "1" ? true : false}/> 
                    <EditItem key="2" titulo="Portifolio" clickEvent={() => setCurrentNav("2")} isSelected={currentNav == "2" ? true : false}/>
                    <EditItem key="3" titulo="Privacidade" clickEvent={() => setCurrentNav("3")} isSelected={currentNav == "3" ? true : false}/>
                </MenuItem>
                
            </div>
            <div className="edit-content">
                {getNavContent(currentNav)}
            </div>
        </div>
        
    );
}


export default Edit;