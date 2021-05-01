import React, {useState} from 'react';

import 'react-calendar/dist/Calendar.css';
import './style.css';

// Icons
import {PlusOutlined} from '@ant-design/icons';

// Calendar
import Calendar from 'react-calendar';


// Componentes
import ContainerInfo from './components/containerInfo/containerInfo';
import ContainerItem from './components/containerItem/containerItem';

const MainFeed = () =>{

    const [value, onChange] = useState(new Date());
    return(
        <div className="MainFeed">
            <div className="container-left">
                <ContainerInfo titulo="Recommended Pages">
                    <ContainerItem titulo="Fast Pizza" descricao="Pizza e Fast Food" icone={<PlusOutlined/>}/>
                    <ContainerItem titulo="Lonely Droid" descricao="Technology" icone={<PlusOutlined/>}/>
                    <ContainerItem titulo="Meta Movies" descricao="Movies / Entertainment" icone={<PlusOutlined/>}/>
                </ContainerInfo>

                <ContainerInfo titulo="Stories">
                    <ContainerItem titulo="Gabriel" descricao="1h" />
                    <ContainerItem titulo="Lucas" descricao="3h" />
                    <ContainerItem titulo="Joana" descricao="1d" />
                </ContainerInfo>
                
            </div>

            <div className="container-center">
                <div className="componente-a"></div>
                <div className="componente-a"></div>
                <div className="componente-a"></div>
                <div className="componente-a"></div>
            </div>

            <div className="container-right">
                <ContainerInfo titulo="Stories">
                    <ContainerItem titulo="Gabriel" descricao="1h" />
                    <ContainerItem titulo="Lucas" descricao="3h" />
                    <ContainerItem titulo="Joana" descricao="1d" />
                </ContainerInfo>
                <Calendar onChange={onChange} value={value} maxDetail="month" />
            </div>
        </div>
    )
}

export default MainFeed;