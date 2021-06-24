import React from "react";
import "./memberRow.css";

import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

/* MEMBER ROW */
const MemberRow = ({redirect, img, alt, memberName, memberNick}) => {
    return(
        <div className="MemberRow">
            {/* AVATAR */}
            <div className="MemberRow-avatar">
                <a href={redirect}>
                    <Avatar size="large" icon={<UserOutlined/>}/>
                </a>
            </div>

            {/* MEMBER INFO */}
            <div className="MemberRow-member">
                <a href={redirect}>
                    <h5>{memberName}</h5>
                </a>
                <p>{memberNick}</p>
            </div>
        </div>
    );
};

export default MemberRow;
