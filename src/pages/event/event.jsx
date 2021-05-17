import React, {useState} from 'react';
import './style.css';

// Assets - placeholder
import eventPlaceholder from '../../assets/img/event/eventPlaceholder.jpg';
import eventPlaceholder2 from '../../assets/img/event/eventPlaceholder2.jpg';
import qrPlaceholder from '../../assets/img/event/qrPlaceholder.jpeg';
import userPlaceholder from '../../assets/img/userPlaceholder.jpg';

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

const Event = () =>{

    const [isInCalendar, setIsInCalendar] = useState(false);

    return(
        <div className="Event">
            <div className="Event-photo-div">
                <img src={eventPlaceholder} alt="Foto do evento" />
            </div>
            <div className="Event-ticket">
                <div className="Event-ticket-info">
                    <h2>Hackatruck PRESENCIAL na frente da temakeria Makis Place</h2>
                    <p className="div-margin-bottom Event-ticket-info-p"><ClockCircleOutlined className="event-ticket-info-icon"/> 19:00 PM - 23:00 PM</p>


                    <div className="event-ticket-info-date div-margin-bottom">
                        <div className="event-ticket-info-line">
                            <CalendarOutlined className="event-ticket-info-icon"/>
                            <p className="Event-ticket-info-p">Data</p>
                        </div>
                        {/* conteudo */}
                        <h6>Segunda, Maio 16 2021</h6>
                    </div>

                    <div className="event-ticket-info-category div-margin-bottom">
                        <div className="event-ticket-info-line">
                            <GlobalOutlined className="event-ticket-info-icon"/>
                            <p className="Event-ticket-info-p">Categoria</p>
                            
                        </div>
                        {/* conteudo */}
                        <h6>Oficina</h6>
                    </div>

                    {/* Essa div aqui só renderiza se o evento for presencial */}
                    <div className="event-ticket-info-address div-margin-bottom">
                        <div className="event-ticket-info-line">
                            <EnvironmentOutlined className="event-ticket-info-icon"/>
                            <p className="Event-ticket-info-p">Local</p>
                            
                        </div>
                        {/* conteudo */}
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
{/*                         <img src={userPlaceholder} alt="Foto do organizador do evento"/>
 */}                        <p>Organizado por</p>
                        <h5>Flavin do pneu</h5>
                    </div>
                    
                </div>
                <div className="Event-info-card">
                    <h4>Sobre</h4>
                    <p>Hackatruck vai oferecer sovete de graça e curso de python (o melhor), switft, cloud e nodeRED por 2 semana consecutiva. Detalhes no site: http://hackatruques.com.br</p>
                    
                </div>
            </div>

        </div>
    )
}

export default Event;