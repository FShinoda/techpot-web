import React from "react";
import "./groupRow.css";

import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

/* GROUP ROW */
const GroupRow = ({redirect, img, alt, groupName, membersCount}) => {
    return(
        <div className="GroupRow">
            {/* AVATAR */}
            <div className="GroupRow_avatar">
                <a href={redirect}>
                    <Avatar size="large" icon={<UserOutlined/>}/>
                </a>
            </div>

            {/* GROUP INFO */}
            <div className="GroupRow_group">
                <a href={redirect}>
                    <h5>{groupName}</h5>
                </a>
                <span>{membersCount} membro{membersCount > 1 ? "s" : ""}</span>
            </div>
        </div>
    );
};

export default GroupRow;
