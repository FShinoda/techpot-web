import React from "react";
import "./404.css";


/* ERROR 404 */
const ERR_404 = () => {
    return(
        <div className="ERR_404 flex-center">
            <h1>ERROR<br />404</h1>

            <p>Página não encontrada!</p>

            <a href="/feed">Retornar para a página inicial.</a>
        </div>
    );
};

export default ERR_404;
