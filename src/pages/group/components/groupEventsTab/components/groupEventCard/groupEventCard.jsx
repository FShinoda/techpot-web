import React from "react";
import "./groupEventCard.css";


/* COMPONENTS */
import GroupEventRow from "./groupEventRow/groupEventRow.jsx";


/* IMAGES */
import rockLee from "../../../../../../assets/rock-lee.jpg"
import godNaldo from "../../../../../../assets/ednaldo-pereira-stars.jpg"
import poneis from "../../../../../../assets/poneis-malditos.jpeg"
import avt_01 from "../../../../../../assets/img_avatar_01.png";
import avt_02 from "../../../../../../assets/img_avatar_02.png";
import avt_03 from "../../../../../../assets/img_avatar_03.png";


/* ICONS */
import eventIcon from "../../../../../../assets/icone_evento-azul.png";


/* GROUP EVENT CARD */
const GroupEventCard = ({headingTitle, headingButtonName}) => {
    // Checking Next or Previous 
    const isNext = true;


    // Checking if event list is null
    const isNull = false;


    return(
        <div className="GroupEventCard">
            <div className="GroupEventCard-heading">
                <h1>{headingTitle}</h1>
                {
                    isNext
                    ?
                        <button>{headingButtonName}</button>
                    :
                        null
                }
            </div>

            <div className="GroupEventCard-body flex-center">
                {
                    isNull
                    ?
                        <div className="GroupEventCard-body-null flex-center">
                            <img src={eventIcon} alt="Ícone de evento." />
                            <span>Nenhum evento por aqui!</span>
                        </div>
                    :
                    <div className="GroupEventCard-events">
                        <GroupEventRow eventImg={rockLee} eventImgAlt={"Imagem do evento."} date={"27/09/2021"} title={"Evento XYZ - Rock Lee é melhor do que Neji"} creatorImg={avt_01} creatorImgAlt={"Foto do criador do evento."} creatorName={"Ademir I, primeiro de seu nome"} />
                        <GroupEventRow eventImg={godNaldo} eventImgAlt={"Imagem do evento."} date={"27/09/2021"} title={"Evento XYZ - Evento de adoração e sacralização de GODnaldo Pereira"} creatorImg={avt_02} creatorImgAlt={"Foto do criador do evento."} creatorName={"Ademir II, segundo de seu nome"} />
                        <GroupEventRow eventImg={poneis} eventImgAlt={"Imagem do evento."} date={"27/09/2021"} title={"Evento XYZ - Evento Póstumo de Rememorização dos Pôneis Malditos"} creatorImg={avt_03} creatorImgAlt={"Foto do criador do evento."} creatorName={"Ademir III, terceiro de seu nome"} />
                    </div>
                }
            </div>

            {
                isNull
                ?
                    null
                :
                    <div className="GroupEventCard-footer flex-center">
                        <button>ver mais</button>
                    </div>
            }
        </div>
    );
};

export default GroupEventCard;
