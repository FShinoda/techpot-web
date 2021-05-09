import React, { useState } from "react";
import "antd/dist/antd.css";
import "./userProfile.css";


/* IMAGES */
import profileBackgroundImage from "../../assets/profileBackgroundImage.jpg";
import userProfilePlaceholder from "../../assets/userProfilePlaceholder.jpg";


/* ICONS */
import { FaCamera } from "react-icons/fa";
import { InboxOutlined } from "@ant-design/icons";


/* ANT DESIGN */
import {
    Modal,
    Button,
    Upload,
    message
} from "antd";


/* USER PROFILE PAGE */
const UserProfile = () => {
    // Owner or Guest Verification
    let isOwner = true;


    // Friend Verification
    let isFriend = true;


    // Camera Button: Show Modal
    const [ showModal, setShowModal ] = useState(false);

    
    // Upload Image
    const { Dragger } = Upload;
    
    const propsUpload = {};


    return(
        <div className="UserProfile">
            
            
            {/* BACKGROUND IMAGE AND PROFILE PHOTO */}
            <div className="graphical">
                <div className="background">
                    <img className="backgroundImg" src={profileBackgroundImage} alt="Imagem de fundo do perfil do usuário." />
                    {
                        isOwner
                        ?
                            <div className="backgroundImgCameraIcon">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="imgBtn" onClick={() => setShowModal(!showModal)}>
                                    <FaCamera />
                                </a>
                                <Modal
                                    title="Atualizar imagem"
                                    visible={showModal}
                                    onCancel={() => setShowModal(!showModal)}
                                    centered
                                    bodyStyle={{
                                        backgroundColor: "#1e2e3e"
                                    }}
                                    footer={[
                                        <Button
                                            key="back"
                                            type="primary"
                                            onClick={() => setShowModal(!showModal)}
                                            style={{
                                                backgroundColor: "#eee",
                                                borderColor: "transparent"
                                            }}
                                            className="backModalBtn"
                                        >
                                            Voltar
                                        </Button>,
                                        <Button
                                            key="submit"
                                            type="primary"
                                            // onClick={}
                                            style={{
                                                backgroundColor: "#d0094d",
                                                borderColor: "transparent"
                                            }}
                                            className="submitModalBtn"
                                        >
                                            Enviar
                                        </Button>
                                    ]}
                                >
                                    <Dragger {...propsUpload}>
                                        <p className="iconInbox"><InboxOutlined /></p>
                                        <p className="draggerText">Clique ou arraste um arquivo para esta área</p>
                                    </Dragger>
                                </Modal>
                            </div> 
                        :
                            null
                    }
                </div>

                <div className="profileImg">
                    <img className="userImg" src={userProfilePlaceholder} alt="Imagem de perfil do usuário." />
                    {
                        isOwner
                        ?
                            <div className="profilePhotoCameraIcon">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="profilePhoto flex-center" onClick={() => setShowModal(!showModal)}>
                                    <FaCamera className="imgBtn" />
                                </a>
                                <Modal
                                    title="Atualizar imagem"
                                    visible={showModal}
                                    onCancel={() => setShowModal(!showModal)}
                                    centered
                                    bodyStyle={{
                                        backgroundColor: "#1e2e3e"
                                    }}
                                    footer={[
                                        <Button
                                            key="back"
                                            type="primary"
                                            onClick={() => setShowModal(!showModal)}
                                            style={{
                                                backgroundColor: "#eee",
                                                borderColor: "transparent"
                                            }}
                                            className="backModalBtn"
                                        >
                                            Voltar
                                        </Button>,
                                        <Button
                                            key="submit"
                                            type="primary"
                                            // onClick={}
                                            style={{
                                                backgroundColor: "#d0094d",
                                                borderColor: "transparent"
                                            }}
                                            className="submitModalBtn"
                                        >
                                            Enviar
                                        </Button>
                                    ]}
                                >
                                    <Dragger {...propsUpload}>
                                        <p className="iconInbox"><InboxOutlined /></p>
                                        <p className="draggerText">Clique ou arraste um arquivo para esta área</p>
                                    </Dragger>
                                </Modal>
                            </div>
                        :
                            null
                    }

                    {
                        isFriend
                        ?
                            null
                        :
                            <div className="iconAdd flex-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="iconAddSymbol">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                    }
                </div>
            </div>


            {/* NAME AND IDENDITY */}
            <div className="profileId">
                <h2>Nome Sobrenome</h2>
                <span>Sistemas de Informação</span>
            </div>
        </div>
    );
};

export default UserProfile;
