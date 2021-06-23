import React, { useState } from "react";

import "react-calendar/dist/Calendar.css";
import "./style.css";

import Navbar from "../../components/navbar/navbar.jsx";

// Icons
import { PlusOutlined } from "@ant-design/icons";

// Calendar
import Calendar from "react-calendar";

// Componentes
import ContainerInfo from "./components/containerInfo/containerInfo";
import ContainerItem from "./components/containerItem/containerItem";
import CreatePostContainer from '../../components/CreatePostContainer';
import ModalCreatePost from "../../components/ModalCreatePost"
import Post from "../../components/Post/index";
// import CreatePost from "../../components/createPost/createPost.jsx"; // TODO -> Review if this can be removed

// Redux
import { useSelector } from 'react-redux';

const MainFeed = () => {
  const [value, onChange] = useState(new Date());
  const [showModalCreatePost, setShowModalCreatePost] = useState(false);

  const postListUser = useSelector((state) => state.entitie.post.postListByUser);

  const openModalCreatePost = () => {
    setShowModalCreatePost(!showModalCreatePost);
  };

  return (
    <div className="MainFeed">
      <div className="container-left">
        <ContainerInfo titulo="Recommended Pages">
          <ContainerItem
            titulo="Fast Pizza"
            descricao="Pizza e Fast Food"
            icone={<PlusOutlined />}
          />
          <ContainerItem
            titulo="Lonely Droid"
            descricao="Technology"
            icone={<PlusOutlined />}
          />
          <ContainerItem
            titulo="Meta Movies"
            descricao="Movies / Entertainment"
            icone={<PlusOutlined />}
          />
        </ContainerInfo>

        <ContainerInfo titulo="Stories">
          <ContainerItem titulo="Gabriel" descricao="1h" />
          <ContainerItem titulo="Lucas" descricao="3h" />
          <ContainerItem titulo="Joana" descricao="1d" />
        </ContainerInfo>
      </div>

      <div className="container-center">
        <CreatePostContainer openCreatePostModal={openModalCreatePost} />

        {postListUser.map((posts) => (
          <Post
            key={posts.post_id}
            post_body={posts.post_body}
            post_id={posts.post_id}
            data_criacao={posts.post_create_date}
            post_body_html={posts.post_body_html}
            post_body={posts.post_body}
            grupo={posts.group_name}
            id_criador={posts.user_id}
            nome_criador={posts.user_name}
            like_count={posts.post_like_count}
            comment_count={posts.post_comment_count}
            comment_id={posts.comment_id}
            comment_body={posts.comment_body}
            comment_user_id={posts.comment_user_id}
            comment_user_name={posts.comment_user_name}
            comment_date={posts.comment_date}
          />
        ))}
      </div>

      <div className="container-right">
        <ContainerInfo titulo="Stories">
          <ContainerItem titulo="Gabriel" descricao="1h" />
          <ContainerItem titulo="Lucas" descricao="3h" />
          <ContainerItem titulo="Joana" descricao="1d" />
        </ContainerInfo>
        {/*<Calendar onChange={onChange} value={value} maxDetail="month" />
         */}{" "}
      </div>

      {showModalCreatePost && (
        <ModalCreatePost onClose={() => setShowModalCreatePost(!showModalCreatePost)} />
      )}
        
    </div>
  );
};

export default MainFeed;
