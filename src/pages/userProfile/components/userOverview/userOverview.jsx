import React from "react";
import "./userOverview.css";


/* COMPONENTS */
import UserOverallInfo from "./components/UserOverallInfo/UserOverallInfo.jsx";


/* IMAGES */
import SP from "../../../../assets/bandeira_sp.png";
import tech from "../../../../assets/tech_studyArea.png"
import enterprise from "../../../../assets/enterprise-logo.jpg";
import rockLee from "../../../../assets/rock-lee.jpg";


/* USER OVERVIEW */
const UserOverview = ({ user_profile }) => {

    return(
        <div className="UserOverview">
            {/* OVERALL INFO */}
            <div className="UserOverview_overallInfo">
                <UserOverallInfo img={tech} alt={"Imagem do curso de Sistemas de Informação."} desc={"Área: "} info={"Sistemas de Informação"} />
                <UserOverallInfo img={enterprise} alt={"Foto da Empresa."} desc={"Trabalho: "} info={"Consultoria de Consultores S/A"} />
                <UserOverallInfo img={SP} alt={"Bandeira do Estado de São Paulo."} desc={"Residência: "} info={"São Caetano do Sul, SP"} />
                <UserOverallInfo img={rockLee} alt={"Imagem do grupo."} desc={"Grupo em destaque: "} info={"Rock Lee do Pagode Namora D+"} />
            </div>

            {/* BIO */}
            <div className="UserOverview_userBio">
                <h3>Sobre</h3>

                <p>{user_profile.u ? user_profile.u.bio ? user_profile.u.bio : "Parece que esse usuario gosta de manter o misterio" : " " }</p>

            </div>
        </div>
    );
};

export default UserOverview;
