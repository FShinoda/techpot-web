/* REACT */
import React from "react";
import { Switch, Route } from 'react-router-dom';


/* PAGES */
// Login
import LoginPage from "./pages/login/login.jsx";

// Navbar
import Navbar from "./components/navbar/navbar.jsx";

// Feed
import MainFeed from './pages/feed/mainFeed.jsx';

// Perfil de Usuário
import UserProfile from './pages/userProfile/userProfile.jsx';

// Group Search 
import GroupSearch from './pages/groupSearchMob/groupSearch.jsx';

// Group
import Group from "./pages/group/group.jsx";

// Event Search
import EventSearch from "./pages/eventSearch/eventSearch.jsx";

// Event
import Event from './pages/event/event.jsx';

/* Edit */
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

// ERROR 404
import ERR_404 from "./pages/404/404.jsx";


const Router = () =>{
    return(
        <Switch>
            {/* LOGIN */}
            <Route exact path="/login" component={LoginPage} />

            {/* MAIN FEED */}
            <Route exact path="/feed" component={MainFeed} />

            {/* USER PROFILE */}
            <Route exact path="/perfil" component={UserProfile} />

            {/* FIND GROUPS */}
            <Route exact path="/grupos" component={GroupSearch} />

            {/* GROUP PAGE */}
            <Route exact path="/grupo" component={Group} />

            {/* FIND EVENTS */}
            <Route exact path="/eventos" component={EventSearch} />

            {/* EVENT PAGE */}
            <Route exact path="/evento" component={Event} />


            {/* EDIT */}
            <Route exact path="/editar" component={GeneralEdit} />
            <Route exact path="/editar/conta" component={AccountEdit} /> {/* Mobile only */}
            <Route exact path="/editar/perfil" component={ProfileEdit} /> {/* Mobile only */}
            <Route exact path="/editar/portifolio" component={PortfolioEdit} /> {/* Mobile only */}
            <Route exact path="/editar/notificacao" component={NotifEdit} /> {/* Mobile only */}

            {/* 404  */}
            <Route path="/error_404" component={ERR_404} />
        </Switch>
    );
};

export default Router;
