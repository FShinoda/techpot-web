import React, {useState} from 'react';
import './style.css';

// Assets
import userPlaceholder from '../../assets/img/userPlaceholder.jpg';

// Antd Icons
import {HeartOutlined, HeartFilled, MessageOutlined, MessageFilled} from '@ant-design/icons';

const Post = () =>{

    const [isHearted, setIsHearted] = useState(false);
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    return(

        <div className="Post">
            {/* "cabeçalho" do post com imagem, nome e info */}
            <div className="Post-header">
                <img src={userPlaceholder} alt="Foto de perfil do usuário que postou"/>
                <div className="Post-header-text">
                    <h6>Flávio Marques</h6>
                    <p>Oferta de Estágios 2021.1 - 30 min</p>
                </div>    
            </div>
            {/* Aonde vai o conteudo postado de fato */}
            <div className="Post-content">
                <p>Pessoal! Temos uma oferta de emprego na empresa levelUp Games! Eles procuram a galera que ta afim de programar e também da galera pra fazer o design dos persongagems. Se se interessou entre no link e deixa o like :)</p>
            </div>
            {/* Footer do post, com botoes de like e comentario */}
            <div className="Post-footer">
                <p>15</p>
                {isHearted ? (
                    <HeartFilled onClick={() => setIsHearted(false)}className="Post-icon Post-heart" style={{color: 'var(--color-secundary)'}}/>
                ) : (
                    <HeartOutlined onClick={() => setIsHearted(true)} className="Post-icon Post-heart" style={{color: 'var(--color-secundary)'}}/>  
                )}
                <p>7</p>
                {isCommentOpen ? (
                    <MessageFilled onClick={() => setIsCommentOpen(false)} className="Post-icon" style={{color: 'var(--color-primary-text'}}/>
                ) : (
                    <MessageOutlined onClick={() => setIsCommentOpen(true)} className="Post-icon" style={{color: 'var(--color-primary-text'}}/>
                )}
                
            </div>
        </div>

    )
}

export default Post;