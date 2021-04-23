import React from "react";
import { Switch, Route } from 'react-router-dom';

/// Pages
// Pagina App - exemplo
import App from './pages/exemplo/App';

const Router = () =>{
    return(
        <Switch>
            <Route exact path="/exemplo" component={App}/>
        </Switch>
    );
};

export default Router;
