/* REACT */
import React from "react";
import { Switch, Route } from 'react-router-dom';

//// Pages
/// Pagina-Exemplo:
import App from './pages/exemplo/App.jsx';

/// Paginas Funcionais

// Feed
import MainFeed from './pages/feed/mainFeed.jsx';

// Perfil de Usuário
import UserProfile from './pages/userProfile/userProfile.jsx';

// Edit (pagina de configurações)
import GeneralEdit from './pages/generalEdit/generalEdit.jsx';

// Group Search 
import GroupSearch from './pages/groupSearchMob/groupSearch';

import Navbar from "./components/navbar/navbar.jsx";

const Router = () =>{
    return(
        <Switch>
            {/* Páginas-exemplo a serem deletadas futuramente */}
            <Route exact path="/testnav" component={Navbar} />
            <Route exact path="/exemplo" component={App}/>
            
            {/* Páginas que usaremos de fato */}
            <Route exact path="/feed" component={MainFeed} />
            <Route exact path="/perfil" component={UserProfile} />
            <Route exact path="/edit" component={GeneralEdit} />
            <Route exact path="/grupos" component={GroupSearch} />

            {/* 404  */}
            {/* <Route path="*" component={} /> */}
        </Switch>
    );
};

export default Router;
