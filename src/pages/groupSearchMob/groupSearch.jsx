import React from 'react';
import './style.css';

// Assets - placeholder!
import groupPlaceholder from '../../assets/groupPlaceholder.jpeg';

// Components
import GroupItem from './components/groupItem/groupItem';

// Antd Icons
import {LeftOutlined} from '@ant-design/icons';


const GroupSearch = () =>{

    return(
        <div className="GroupSearch">
            <div className="GroupSearch-header">
                <LeftOutlined className="header-icon"/>
                <input type="text" className="header-search" placeholder="Pesquisar grupo..."/>
            </div>
            <div className="GroupSearch-container">
                <div className="GroupSearch-banner">
                    <h2 className="GroupSearch-title">Grupos</h2>
                    <button className="GroupSearch-btn-newGroup">Novo Grupo</button> 
                </div> 
                <div className="GroupSearch-groups">
                    <GroupItem title={"Barzão Virtual do segundo semstedfsfsdf"} carreer={"TECH"} img={groupPlaceholder} />
                    <GroupItem title={"Barzão Virtual"} carreer={"TECH"} img={groupPlaceholder} />
                    <GroupItem title={"Barzão Virtual"} carreer={"TECH"} img={groupPlaceholder} />
                    <GroupItem title={"Barzão Virtual"} carreer={"TECH"} img={groupPlaceholder} />
                    <GroupItem title={"Barzão Virtual"} carreer={"TECH"} img={groupPlaceholder} />
                    <GroupItem title={"Barzão Virtual"} carreer={"TECH"} img={groupPlaceholder} />
                    <GroupItem title={"Barzão Virtual"} carreer={"TECH"} img={groupPlaceholder} />
                    <GroupItem title={"Barzão Virtual"} carreer={"TECH"} img={groupPlaceholder} />
                    <GroupItem title={"Barzão Virtual"} carreer={"TECH"} img={groupPlaceholder} />
                    <GroupItem title={"Barzão Virtual"} carreer={"TECH"} img={groupPlaceholder} />
                    <GroupItem title={"Barzão Virtual"} carreer={"TECH"} img={groupPlaceholder} />
                    <GroupItem title={"Barzão Virtual"} carreer={"TECH"} img={groupPlaceholder} />
                    
                </div>
            </div>
            <div className="GroupSearch-load-more">
                <button className="btn-load">Carregar Mais</button>
            </div>
        </div>
    )
}

export default GroupSearch;