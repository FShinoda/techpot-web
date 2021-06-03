import React, { useState, useEffect } from 'react';
import './style.css';

// Assets - placeholder
import eventPlaceholder from '../../assets/img/event/eventPlaceholder.jpg';
import eventPlaceholder2 from '../../assets/img/event/eventPlaceholder2.jpg';
import qrPlaceholder from '../../assets/img/event/qrPlaceholder.jpeg';
import userPlaceholder from '../../assets/img/userPlaceholder.jpg';

// Antd
import { Avatar} from 'antd';

// React Router
import { useParams } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  infoEvent,
  listInvitedEvent,
  listSubEvent,
} from "../../store/_entities/Event";

// Antd Icons
import {
    ClockCircleOutlined, 
    DownOutlined, 
    CalendarOutlined,
    CarryOutOutlined, 
    GlobalOutlined, 
    EnvironmentOutlined, 
    ShareAltOutlined, 
    LinkedinOutlined,
    WhatsAppOutlined, 
    TwitterOutlined, 
    LinkOutlined} from '@ant-design/icons';

// Helpers
import { DateFormatter } from "../../helpers/dateFormatter";
import { formatUserName } from "../../helpers/formatUserName";

import { EventAvailable } from '@material-ui/icons';

const Event = () =>{
    const dispatch = useDispatch();

    const { id } = useParams();

    const eventInfo = useSelector((state) => state.entitie.event.info);
    const inviteList = useSelector((state) => state.entitie.event.inviteList);
    const subList = useSelector((state) => state.entitie.event.subscribeList);
  
    useEffect(() => {
      dispatch(infoEvent(id));
      dispatch(listInvitedEvent(id));
      dispatch(listSubEvent(id));
    }, []);

    const [isInCalendar, setIsInCalendar] = useState(false);

    let fullInitDate;
    let initTime;
    let fullEndDate;
    let endTime;
  
    // Formating date
    if (eventInfo.row) {
      const dataInicio = new DateFormatter(eventInfo.data_inicio);
      fullInitDate = dataInicio.getFullDate();
      initTime = dataInicio.getHour();
  
      const dataFim = new DateFormatter(eventInfo.row.dateEnd);
      fullEndDate = dataFim.getFullDate();
      endTime = dataFim.getHour();
    }


    return(
        <div className="Event">
            <div className="Event-photo-div">
                <img src={eventPlaceholder} alt="Foto do evento" />
            </div>
            <div className="Event-ticket">
                <div className="Event-ticket-info">
                    <h2>{eventInfo.row ? eventInfo.row.event_name : "Nome evento"}</h2>
                    <p className="div-margin-bottom Event-ticket-info-p"><ClockCircleOutlined className="event-ticket-info-icon"/>{eventInfo.row ? initTime + "-" + endTime : " "}</p>

                    <div className="event-ticket-info-date div-margin-bottom">
                        <div className="event-ticket-info-line">
                            <CalendarOutlined className="event-ticket-info-icon"/>
                            <p className="Event-ticket-info-p">Data</p>
                        </div>
                        {/* conteudo */}
                        <h6>{eventInfo.row ? fullInitDate : "Data evento"}</h6>
                    </div>

                    <div className="event-ticket-info-category div-margin-bottom">
                        <div className="event-ticket-info-line">
                            <GlobalOutlined className="event-ticket-info-icon"/>
                            <p className="Event-ticket-info-p">Categoria</p>
                        </div>
                        {/* conteudo */}
                        <h6>{eventInfo.row ? eventInfo.row.category_name : "Nome categoria evento"}</h6>
                    </div>

                    {/* Essa div aqui só renderiza se o evento for presencial */}
                    <div className="event-ticket-info-address div-margin-bottom">
                        <div className="event-ticket-info-line">
                            <EnvironmentOutlined className="event-ticket-info-icon"/>
                            <p className="Event-ticket-info-p">Local</p>
                            
                        </div>
                        {/* conteudo */}
                        {/* TODO -> Add endereco no BD  */}
                        <h6>R. Maj. Maragliano, 391 - Vila Mariana, São Paulo - SP, 04017-030</h6>
                    </div>
                    
                    <div className="event-ticket-info-share div-margin-bottom">
                        <div className="event-ticket-info-line">
                            <ShareAltOutlined className="event-ticket-info-icon"/>
                            <p className="Event-ticket-info-p">Compartilhar</p>
                        </div>
                        <div className="event-ticket-info-line">
                            <TwitterOutlined className="event-ticket-info-icon-share"/>
                            <WhatsAppOutlined className="event-ticket-info-icon-share"/>
                            <LinkedinOutlined className="event-ticket-info-icon-share"/>
                            <LinkOutlined className="event-ticket-info-icon-share"/>
                        </div>
                        
                    </div>
                    

                    <div className="Event-ticket-info-separator">
                        <DownOutlined />
                    </div>
                </div>
                <div className="Event-ticket-code">
                    <h2>Inscreva-se</h2>
                    <div className="Event-ticket-code-calendar">
                        <p>1. Adicione o evento ao seu calendário</p>
                        {isInCalendar ? 
                        (<button onClick={() => setIsInCalendar(false)} className="btn-success"><CarryOutOutlined /> Adicionado</button>): 
                        (<button onClick={() => setIsInCalendar(true)}><CalendarOutlined /> Adicionar</button>)}
                        
                    </div>
                    <div className="Event-ticket-code-qr">
                        <p>2. Escaneie o QR code para se inscrever automaticamente no evento.</p>
                        <img src={qrPlaceholder} alt="QR code"/>
                    </div>

                    <p>Ou se inscreva <a>aqui</a>.</p>
                    

                </div>
            </div>

            <div className="Event-info">
                <div className="Event-info-card">
                    <div className="Event-info-organizator">
                        <div className="Event-info-organizator-img">
                            <img src={userPlaceholder} alt="Foto do organizador do evento"/>
                        </div>
                        <div>
                            <p>Organizado por</p>
                            <h5>{eventInfo.row ? formatUserName(eventInfo.row.user_name) : "Nome organizador"}</h5>
                            <p>@{eventInfo.row ? eventInfo.row.user_username : "Username organizador"}</p>
                        </div>
                         
                    </div>
                    
                </div>

                <div className="Event-info-left">
                    <div className="Event-info-card">
                        <h4>Sobre</h4>
                        <p>{eventInfo.row ? eventInfo.row.event_desc : "Descricao evento"}</p>
                    </div>

                    <div className="Event-info-card">
                        <div className="Event-sub-counter flex-center">
                            <h4 className="Event-subscription">Inscritos: <b>180</b></h4>
                        </div>
                        <div className="flex-center">
                            <Avatar.Group maxCount={2}>
                                <Avatar src={userPlaceholder} />
                                <Avatar src={userPlaceholder} />
                                <Avatar src={userPlaceholder} />
                                <Avatar src={userPlaceholder} />
                            </Avatar.Group>
                        </div>
                        
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Event;