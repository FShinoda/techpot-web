import React, { useState } from "react";
import "./updateImageModal.css";


/* ICONS */
import { InboxOutlined } from "@ant-design/icons";


/* ANT DESIGN */
import {
    Modal,
    Button,
    Upload
} from "antd";


const UpdateImageModal = () => {
    // Show Modal
    const [ showModal, setShowModal ] = useState(false);

    
    // Upload Image
    const { Dragger } = Upload;
    
    const propsUpload = {};


    return(
        <div className="UpdateImageModal">
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
    );
};

export default UpdateImageModal;
