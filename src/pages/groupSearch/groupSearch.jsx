import React from 'react';

import './style.css';

// Components
import CardGroup from './components/cardGroup/cardGroup';

const GroupSearch = () =>{
    return(
        <div className="GroupSearch">
            <div className="groupSearch-header">
                <h2>Grupos</h2>
                <button>Novo grupo</button>

            </div>

            {/* Foi usado space-between aqui, por favor fazer o select dos
            grupos em multiplo de 4, para evitar defeitos de css*/}
            <div className="groupSearch-colection">
                <CardGroup title={"Barzão Virtual"} career={"TECH"}/>
                <CardGroup title={"Barzão Virtual"} career={"Jornalismo"}/>
                <CardGroup title={"Barzão Virtual"} career={"Administração"}/>
                <CardGroup title={"Barzão Virtual"} career={"Cinema"}/>
                <CardGroup title={"Barzão Virtual"} career={"Marketing"}/>
                <CardGroup title={"Barzão Virtual"} career={"Ciencias sociais"}/>
                <CardGroup title={"Barzão Virtual"} career={"Publicidade e Propaganda"}/>
                <CardGroup title={"Barzão Virtual"} career={"Easter Egg"}/>
            </div>

        </div>
    )
}

export default GroupSearch;