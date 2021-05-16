import React from 'react';
import './style.css';

// Assets - placeholder
import eventPlaceholder from '../../assets/img/event/eventPlaceholder.jpg';
import eventPlaceholder2 from '../../assets/img/event/eventPlaceholder2.jpg';
import qrPlaceholder from '../../assets/img/event/qrPlaceholder.jpeg';
import logo from '../../assets/logo.png';

// Antd Icons
import {ClockCircleOutlined, DownOutlined, CalendarOutlined, GlobalOutlined, EnvironmentOutlined, ShareAltOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

const Event = () =>{
    return(
        <div className="Event">
            <div className="Event-photo-div">
                <img src={eventPlaceholder} alt="Foto do evento" />
            </div>
            <div className="Event-ticket">
                <div className="Event-ticket-info">
                    <h2>Hackatruck PRESENCIAL na frente da temakeria Makis Place</h2>
                    <p className="div-margin-bottom"><ClockCircleOutlined className="event-ticket-info-icon"/> 19:00 PM - 23:00 PM</p>


                    <div className="event-ticket-info-date div-margin-bottom">
                        <div className="event-ticket-info-line">
                            <CalendarOutlined className="event-ticket-info-icon"/>
                            <p>Data</p>
                        </div>
                        {/* conteudo */}
                        <h6>Segunda, Maio 16 2021</h6>
                    </div>

                    <div className="event-ticket-info-category div-margin-bottom">
                        <div className="event-ticket-info-line">
                            <GlobalOutlined className="event-ticket-info-icon"/>
                            <p>Categoria</p>
                            
                        </div>
                        {/* conteudo */}
                        <h6>Webinar</h6>
                    </div>

                    {/* Essa div aqui só renderiza se o evento for presencial */}
                    <div className="event-ticket-info-address div-margin-bottom">
                        <div className="event-ticket-info-line">
                            <EnvironmentOutlined className="event-ticket-info-icon"/>
                            <p>Local</p>
                            
                        </div>
                        {/* conteudo */}
                        <h6>R. Maj. Maragliano, 391 - Vila Mariana, São Paulo - SP, 04017-030</h6>
                    </div>
                    
                    <div className="event-ticket-info-share div-margin-bottom">
                        <div className="event-ticket-info-line">
                            <ShareAltOutlined className="event-ticket-info-icon"/>
                            <p>Compartilhar</p>
                        </div>
                        <div className="event-ticket-info-line">
                            <TwitterOutlined className="event-ticket-info-icon-share"/>
                            <LinkedinOutlined className="event-ticket-info-icon-share"/>
                        </div>
                        
                    </div>
                    

                    <div className="Event-ticket-info-separator">
                        <DownOutlined />
                    </div>
                </div>
                <div className="Event-ticket-code">
                    <h2>Inscreva-se</h2>
                    <div className="Event-ticket-code-calendar">
                        <p>Adicione o evento ao seu calendário</p>
                        <button><CalendarOutlined /> Adicionar</button>
                    </div>
                    <div className="Event-ticket-code-qr">
                        <p>Escaneie o QR code para se inscrever automaticamente no evento.</p>
                        <img src={qrPlaceholder} alt="QR code"/>
                    </div>
                    

                </div>
            </div>

        </div>
    )
}

export default Event;