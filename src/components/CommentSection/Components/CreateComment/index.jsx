import React from 'react';
import './style.css';

// Components
import UserProfileImg from "../../../UserProfileImg";

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const CreateComment = () => {
    return (
        <div className="create-comment-container">
            <div className="create-comment-profile-pic">
                <Avatar size={{ xs: 24, sm: 32, md: 40}} icon={<UserOutlined />} />
            </div>

            <textarea placeholder="Escreva um comentário..." />
        </div>
    );
};

export default CreateComment;