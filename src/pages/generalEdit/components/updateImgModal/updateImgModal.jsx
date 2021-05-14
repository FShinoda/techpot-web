import React, { useState } from "react";
import "./style.css";


/* ICONS */
import { FaCamera } from "react-icons/fa";
import { InboxOutlined } from "@ant-design/icons";


/* ANT DESIGN */
import {
    Modal,
    Button,
    Upload
} from "antd";


const UpdateImageModal = ({title, onUpdate}) => {
    // Show Modal
    const [ showModal, setShowModal ] = useState(false);

    
    // Upload Image
    const { Dragger } = Upload;
    
    const propsUpload = {};


    return(
        <div className="UpdateImageModal">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="imgBtn" onClick={() => setShowModal(!showModal)}>
                <FaCamera />
            </a>
            <Modal
                title={"Atualizar foto do " + title}
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
    );
};

export default UpdateImageModal;
