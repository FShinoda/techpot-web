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
import UserProfile from './pages/userProfile/style.jsx';

// Edit (pagina de configurações)
import Edit from './pages/edit/edit.jsx';

// Group Search 
import GroupSearch from './pages/groupSearch/groupSearch';

const Router = () =>{
    return(
        <Switch>
            {/* Páginas-exemplo a serem deletadas futuramente */}
            <Route exact path="/exemplo" component={App}/>=
            
            {/* Páginas que usaremos de fato */}
            <Route exact path="/feed" component={MainFeed} />
            <Route exact path="/perfil" component={UserProfile} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/grupos" component={GroupSearch} />

            {/* 404  */}
            {/* <Route path="*" component={} /> */}
        </Switch>
    );
};

export default Router;
