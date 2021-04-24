/* REACT */
import React from "react";
import { Switch, Route } from 'react-router-dom';

/// Pages
// Pagina-Exemplo:
import App from './pages/exemplo/App.jsx';

// Paginas Funcionais

/* PÁGINAS */
// Perfil de Usuário
import UserProfile from "./pages/userProfile/style.jsx";

const Router = () =>{
    return(
        <Switch>
            {/* Páginas-exemplo a serem deletadas futuramente */}
            <Route exact path="/exemplo" component={App}/>=
            
            {/* Páginas que usaremos de fato */}
            <Route exact path="/perfil" component={UserProfile} />
        </Switch>
    );
};

export default Router;
