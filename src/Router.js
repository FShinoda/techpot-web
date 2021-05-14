/* REACT */
import React from "react";
import { Switch, Route } from 'react-router-dom';

/// Pages
// Pagina App - exemplo
import App from './pages/exemplo/App';
import UserProfile from "./pages/userProfile/userProfile"; 

const Router = () =>{
    return(
        <Switch>
            <Route exact path="/exemplo" component={App}/>
            <Route exact path="/perfil" component={UserProfile} />
        </Switch>
    );
};

export default Router;
