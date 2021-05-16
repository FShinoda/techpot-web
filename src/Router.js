/* REACT */
import React from "react";
import { Switch, Route } from 'react-router-dom';

//// Pages
/// Pagina-Exemplo:

/// Paginas Funcionais

// Feed
import MainFeed from './pages/feed/mainFeed.jsx';


// Perfil de Usuário
import UserProfile from './pages/userProfile/userProfile.jsx';


/// Edit (pagina de configurações)
import GeneralEdit from './pages/generalEdit/generalEdit.jsx';
// Edit Acc
import AccountEdit from './pages/generalEdit/pages/accountEdit/accountEdit.jsx';
// Edit Profile
import ProfileEdit from './pages/generalEdit/pages/profileEdit/profileEdit.jsx';
// Edit Portifolio
import PortfolioEdit from './pages/generalEdit/pages/portfolioEdit/portfolioEdit.jsx';
// Edit Notif
import NotifEdit from './pages/generalEdit/pages/notifEdit/notifEdit.jsx';


// Group Search 
import GroupSearch from './pages/groupSearchMob/groupSearch';

// Event
import Event from './pages/event/event.jsx';

import Navbar from "./components/navbar/navbar.jsx";

const Router = () =>{
    return(
        <Switch>
            {/* Páginas-exemplo a serem deletadas futuramente */}
            <Route exact path="/testnav" component={Navbar} />
            
            {/* Páginas que usaremos de fato */}
            <Route exact path="/feed" component={MainFeed} />
            <Route exact path="/perfil" component={UserProfile} />
            <Route exact path="/editar" component={GeneralEdit} />
            <Route exact path="/editar/conta" component={AccountEdit} /> {/* Mobile only */}
            <Route exact path="/editar/perfil" component={ProfileEdit} /> {/* Mobile only */}
            <Route exact path="/editar/portifolio" component={PortfolioEdit} /> {/* Mobile only */}
            <Route exact path="/editar/notificacao" component={NotifEdit} /> {/* Mobile only */}
            <Route exact path="/grupos" component={GroupSearch} />
            <Route exact path="/evento" component={Event} />

            {/* 404  */}
            {/* <Route path="*" component={} /> */}
        </Switch>
    );
};

export default Router;
