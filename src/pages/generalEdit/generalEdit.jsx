import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


// Components
import EditItem from './components/editItem/editItem.jsx';
import EditHeader from './components/editHeader/editHeader.jsx';

// Icons
import { UserOutlined, BellOutlined, AuditOutlined, LockOutlined } from '@ant-design/icons';

const GeneralEdit = () =>{

    return(
        <div className="GeneralEdit">
            <EditHeader title="Configurações"/>

            <div className="GeneralEdit-container">
                <Link to="/editar/conta" className="GeneralEdit-link"><EditItem icon={<LockOutlined />} title={"Minha conta"} /></Link>
                <Link to="/editar/perfil" className="GeneralEdit-link"><EditItem icon={<UserOutlined/>} title={"Meu perfil"} /></Link>
                <Link to="/editar/portifolio" className="GeneralEdit-link"><EditItem icon={<AuditOutlined />} title={"Meu Portifólio"} /></Link>
                <Link to="/editar/notificacoes" className="GeneralEdit-link"><EditItem icon={<BellOutlined />} title={"Notificações"} /> </Link>
                
                <button className="GeneralEdit-btn-logout">Log out</button>
            
            </div>
        </div>
    )
}

export default GeneralEdit;


