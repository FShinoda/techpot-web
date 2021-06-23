import React from 'react';
import './style.css';

import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

// Helpers
import {DateFormatter} from '../../../../helpers/dateFormatter';
import {formatUserName} from "../../../../helpers/formatUserName";

const CommentBox = ({id, user_id, username, date, content}) => {

    const dataCriacao = new DateFormatter(date);
    let relativeTime = dataCriacao.getRelativeTime();

    return (
        <div className="comment-box-container">
            <div className="comment-box-row1">
                <div className="comment-box-col1">
                    <Avatar size="small" icon={<UserOutlined/>}/>
                </div>
                <div className="comment-box-col2">
                    <div className="comment-box-col2-header">
                        <p className="comment-box-username">{formatUserName(username)}</p>
                    </div>
                    <div className="comment-box-col2-content">
                        <p>{content}</p>
                    </div>
                </div>

            </div>
            <div className="comment-box-col2-footer">
                <p> {relativeTime}</p>
            </div>
        </div>
    );
};

export default CommentBox;