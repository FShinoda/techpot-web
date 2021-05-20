import React from "react";
import "./groupAboutTab.css";


/* ICONS */
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";


/* GROUP ABOUT TAB */
const GroupAboutTab = ({groupCreationDate, creatorName, adminName, membersCount, postCount, newMembersCount}) => {
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
                                {groupCreationDate}
                            </span>
                        </h4>
                    </div>

                    <div className="GroupAboutTab-info-row">
                        <UserOutlined />
                        <h4>
                            Criador:&#160;
                            <span>
                                {creatorName}
                            </span>
                        </h4>
                    </div>

                    <div className="GroupAboutTab-info-row">
                        <UserOutlined />
                        <h4>
                            Administrador:&#160;
                            <span>
                                {adminName}
                            </span>
                        </h4>
                    </div>

                    <div className="GroupAboutTab-info-row">
                        <HiOutlineUserGroup />
                        <h4>
                            Membros:&#160;
                            <span>
                                {membersCount} no total
                            </span>
                        </h4>
                    </div>
                </div>

                <div className="GroupAboutTab-first GroupAboutTab-activity">
                    <h1>Atividade</h1>

                    <div className="GroupAboutTab-activity-row GroupAboutTab-activity-postCount">
                        <IoIosPaper />
                        <h4>{postCount} publicações no último mês</h4>
                    </div>

                    <div className="GroupAboutTab-activity-row GroupAboutTab-activity-newMembersCount">
                        <FaUserFriends />
                        <h4>{newMembersCount} novos membros no último mês</h4>
                    </div>
                </div>
            </div>

            <div className="GroupAboutTab-second">
                <div className="GroupAboutTab-second-bio">
                    <h2>Sobre</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit est quis lacus interdum, non laoreet lorem feugiat. Aenean sollicitudin id dui id vehicula. Quisque a velit id lacus ornare rutrum eu a ante. Praesent eget lacus diam. Curabitur ultrices sit amet eros at porta. Quisque dolor tortor, vulputate in pretium sit amet, viverra sit amet neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc leo purus, pretium sed condimentum ut, ultricies nec augue. Aliquam neque tortor, lobortis in libero eu, fringilla faucibus arcu. Nam fermentum id nunc ac viverra. Sed lectus mi, volutpat ornare consequat ut, malesuada sit amet enim. Suspendisse nec quam id dolor vulputate maximus non ut nisl. Suspendisse potenti. Curabitur ultricies erat velit, sit amet ullamcorper metus sodales nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    );
};

export default GroupAboutTab;
