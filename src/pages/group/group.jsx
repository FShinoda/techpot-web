/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import "./group.css";


/* COMPONENTS */
import GroupNavItemList from "./components/groupNavItemList/groupNavItemList.jsx";
import GroupMembersTab from "./components/groupMembersTab/groupMembersTab.jsx";
import GroupEventsTab from "./components/groupEventsTab/groupEventsTab.jsx";
import GroupAboutTab from "./components/groupAboutTab/groupAboutTab.jsx";
// import CreatePost from "../../components/createPost/createPost.jsx";
// import Post from "../../components/post-v2/post.jsx";

import CreatePostContainer from '../../components/CreatePostContainer';
import ModalCreatePost from "../../components/ModalCreatePost"
import Post from "../../components/Post/index";


/* IMAGES */
import racional from "../../assets/tim-maia_racional.jpg";


/* ICONS */
import { GlobalOutlined, LockOutlined } from "@ant-design/icons";
import icon from "../../assets/icone_lupa-branco.png";
import icon2 from "../../assets/icone_lupa-azul.png";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { infoGroup } from '../../store/_entities/Group';
import { listPostByGroup } from '../../store/_entities/Post';

// React router
import { useParams } from 'react-router-dom';

/* GROUP PAGE */
const Group = () => {
    // Group Scope Definition
    const isPublic = true;
    
    const dispatch = useDispatch();

    const { id } = useParams();

    const [ currentNav, setCurrentNav ] = useState("feed");
    const [showModalCreatePost, setShowModalCreatePost] = useState(false);

    const postListGroup = useSelector(state => state.entitie.post.postListByGroup);
    const groupInfomation = useSelector(state => state.entitie.group.groupInfo);

    useEffect(() => {
        dispatch(infoGroup(id));
        dispatch(listPostByGroup(id));
    }, [])
    
    const openModalCreatePost = () => {
        setShowModalCreatePost(!showModalCreatePost);
    };

    const getNavContent = (current) => {
        switch(current) {
            case "feed":
                return(
                    <div className="groupFeed">
                        <CreatePostContainer openCreatePostModal={openModalCreatePost}/>
                        {postListGroup.map((posts) => (
                            <Post
                                key={posts.post_id}
                                post_body={posts.post_body}
                                post_id={posts.post_id}
                                data_criacao={posts.post_data_criacao}
                                post_body_html={posts.post_body_html}
                                post_body={posts.post_body}
                                grupo={posts.group_name}
                                id_criador={posts.user_id}
                                nome_criador={posts.user_name}
                                like_count={posts.post_like_count}
                            />
                            ))}
                    </div>
                );
            case "about":
                return <GroupAboutTab groupInfomation={groupInfomation.g ? groupInfomation.g : " "} />;
            case "events":
                return <GroupEventsTab />;
            case "members":
                return <GroupMembersTab members={groupInfomation.g ? groupInfomation.g.members_list : " "} />;
            default:
                break;
        }
    };


    return(
        <div className="Group">
            {/* BANNER AND GROUP INFO */}
            <div className="Group-top">
                <div className="Group-banner">
                    <img src={racional} alt={"Foto do Grupo."} />
                </div>

                <div className="Group-id">
                    <h1 className="Group-name">{groupInfomation.g ? groupInfomation.g.name : "Nome do grupo" }</h1>
                    <div className="Group-type">
                        <div className="Group-type-left">
                            {
                                isPublic
                                ?
                                    <div className="Group-type public">
                                        <GlobalOutlined />
                                        <h6>Público &#160;</h6>
                                    </div>
                                :
                                    <div className="Group-type private">
                                        <LockOutlined />
                                        <h6>Privado &#160;</h6>
                                    </div>
                            }
                            <span className="Group-membersCount">{groupInfomation.g ? groupInfomation.g.members_list.length : "Numero de membros do grupo" }&#160;</span>
                        </div>

                        <div className="Group-type-right">
                            <button>Participar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEXT */}
            <div className="Group-infoNav">
                <div className="Group-navbar">
                    <GroupNavItemList icon={icon} icon2={icon2} title={"Visão Geral"} alt={"Ícone de Visão Geral."} clickEvent={() => setCurrentNav("feed")} isSelected={currentNav == "feed" ? true : false} />
                    <GroupNavItemList icon={icon} icon2={icon2} title={"Sobre"} alt={"Ícone de Sobre."} clickEvent={() => setCurrentNav("about")} isSelected={currentNav == "about" ? true : false} />
                    <GroupNavItemList icon={icon} icon2={icon2} title={"Eventos"} alt={"Ícone de Eventos."} clickEvent={() => setCurrentNav("events")} isSelected={currentNav == "events" ? true : false} />
                    <GroupNavItemList icon={icon} icon2={icon2} title={"Membros"} alt={"Ícone de Membros."} clickEvent={() => setCurrentNav("members")} isSelected={currentNav == "members" ? true : false} />
                </div>

                <div className="Group-content">
                    { getNavContent(currentNav) }
                </div>
            </div>

            {showModalCreatePost && (
                <ModalCreatePost onClose={() => setShowModalCreatePost(!showModalCreatePost)} />
            )}
        </div>
    );
};

export default Group;
