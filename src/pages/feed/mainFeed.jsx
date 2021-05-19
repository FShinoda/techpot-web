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
import Post from '../../components/post/post.jsx';

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
                <div className="MainFeed-create-div">
                    <PlusOutlined />
                </div>
                {/* Para testar o component post e createPost coloque aqui */}
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
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