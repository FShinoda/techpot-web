import React from "react";
import "./groupAboutTab.css";


/* ICONS */
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";

// Helpers
import { formatUserName } from '../../../../helpers/formatUserName';
import { DateFormatter } from '../../../../helpers/dateFormatter';

 

/* GROUP ABOUT TAB */
const GroupAboutTab = (groupInfomation) => {

    const {create_date, description, creatorName, num_members, members_list} = groupInfomation.groupInfomation;

    const admin_list = members_list.filter(admin => admin.role_id === 1);

    const formatted_date = new DateFormatter(create_date).getFullDate();

    return(
        <div className="GroupAboutTab">
            <div className="GroupAboutTab-first">
                <div className="GroupAboutTab-first GroupAboutTab-info">
                    <h1>Informações</h1>

                    <div className="GroupAboutTab-info-row">
                        <ClockCircleOutlined />
                        <h4>
                            Data de Criação:&#160;
                            <span>
                                {formatted_date}
                            </span>
                        </h4>
                    </div>

                    <div className="GroupAboutTab-info-row">
                        <UserOutlined />
                        <h4>
                            Administradores:&#160;
                            <span>
                                {admin_list.map((admin, i, arr) => (
                                    formatUserName(admin.user_name) + (arr.length === i + 1 ? " " : ", ")
                                ))}
                            </span>
                        </h4>
                    </div>

                    <div className="GroupAboutTab-info-row">
                        <HiOutlineUserGroup />
                        <h4>
                            Membros:&#160;
                            <span>
                                {members_list.length}
                            </span>
                        </h4>
                    </div>
                </div>

                <div className="GroupAboutTab-first GroupAboutTab-activity">
                    <h1>Atividade</h1>

                    <div className="GroupAboutTab-activity-row GroupAboutTab-activity-postCount">
                        <IoIosPaper />
                        <h4>publicações no último mês</h4>
                    </div>

                    <div className="GroupAboutTab-activity-row GroupAboutTab-activity-newMembersCount">
                        <FaUserFriends />
                        <h4>{num_members} novos membros no último mês</h4>
                    </div>
                </div>
            </div>

            <div className="GroupAboutTab-second">
                <div className="GroupAboutTab-second-bio">
                    <h2>Sobre</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default GroupAboutTab;
