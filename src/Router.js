import React from "react";
import { Switch, Route } from 'react-router-dom';

/// Pages
// Pagina-Exemplo:
import App from './pages/exemplo/App.jsx';

// Paginas Funcionais

const Router = () =>{
    return(
        <Switch>
            {/* Paginas-exemplo a serem deletadas futuramente */}
            <Route exact path="/exemplo" component={App}/>=

            {/* Paginas que usaremos de fato */}
        </Switch>
    );
};

export default Router;
