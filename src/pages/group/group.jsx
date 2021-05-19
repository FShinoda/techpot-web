import React from "react";
import "./group.css";


/* IMAGES */
import racional from "../../assets/tim-maia_racional.jpg";


/* ICONS */
import { GlobalOutlined, LockOutlined } from "@ant-design/icons";


/* GROUP PAGE */
const Group = () => {
    // Group Scope Definition
    const isPublic = true;


    return(
        <div className="Group">
            {/* BANNER AND GROUP INFO */}
            <div className="Group-top">
                <div className="Group-banner">
                    <img src={racional} alt={"Foto do Grupo."} />
                </div>

                <div className="Group-id">
                    <h1 className="Group-name">Universo em Desencanto: O Contato com o Mundo Racional</h1>
                    <div className="Group-type">
                        {
                            isPublic
                            ?
                                <div className="Group-type public">
                                    <GlobalOutlined />
                                    <h6>Público &#160;</h6>
                                </div>
                            :
                                <div className="Group-type private">
                                    <LockOutlined />
                                    <h6>Privado &#160;</h6>
                                </div>
                        }
                        <span className="Group-membersCount">128</span>
                    </div>
                </div>
            </div>

            {/* NEXT */}
            
        </div>
    );
};

export default Group;
