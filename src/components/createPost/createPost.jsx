import React, {useState} from 'react';
import './style.css';

// Assets
import userPlaceholder from '../../assets/img/userPlaceholder.jpg';

// Antd
import { Modal, Cascader } from 'antd';

// Antd Icons
import { EditOutlined, PlusOutlined } from '@ant-design/icons';

const CreatePost = () =>{

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const options = [
        {
            value: 'Oferta de Estágios 2021.1',
            label: 'Oferta de Estágios 2021.1'
        },
        {
            value: 'Barzão Virtual dos Professores',
            label: 'Barzão Virtual dos Professores'
        },
        {
            value: 'ESPM Overbite',
            label: 'ESPM Overbite'
        }
    ];


    return(
        <div className="CreatePost">
            <div onClick={showModal} className="CreatePost-mobile">
                <PlusOutlined />
            </div>
            <div className="CreatePost-info">
                <img src={userPlaceholder} alt="Sua foto de perfil"/>
                <div onClick={showModal} className="CreatePost-btn">
                    <EditOutlined />
                    <p>Divulgue uma ideia...</p>
                </div>
            </div>
            <Modal title="Criar post" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <div className="CreatePost-modal-header">
                    <img src={userPlaceholder} alt="Sua foto de perfil"/>
                    <div>
                        <h6>Flavio Marques</h6>
                        <Cascader size="small" options={options} placeholder="Selecione um grupo"/>
                    </div>
                </div>
                <div className="CreatePost-modal-content">
                    <textarea placeholder="Digite algo..."></textarea>
                </div>
                <div className="CreatePost-modal-submit">
                    <button>Criar post</button>
                </div>
            </Modal>
        </div>

    )
}

export default CreatePost;