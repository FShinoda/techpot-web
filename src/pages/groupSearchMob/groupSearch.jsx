import React, { useState } from "react";
import "./style.css";

// Assets - placeholder
import groupPlaceholder from "../../assets/img/group/groupPlaceholder.jpeg";

// Components
import GroupItem from "./components/groupItem/groupItem";
import ModalCreateGroup from "../../components/ModalCreateGroup";

// Antd Icons
import { LeftOutlined } from "@ant-design/icons";

// Redux
import { useSelector } from "react-redux";

const GroupSearch = () => {
  // Grupo
  const groupList = useSelector((state) => state.entitie.group.groupList);

  const [showModalCreateGroup, setShowModalCreateGroup] = useState(false);

  const openModalCreateGroup = () => {
    setShowModalCreateGroup(!showModalCreateGroup);
  };

  return (
    <div className="GroupSearch">
      <div className="GroupSearch-header">
        <LeftOutlined className="header-icon" />
        <input
          type="text"
          className="header-search"
          placeholder="Pesquisar grupo..."
        />
      </div>
      <div className="GroupSearch-container">
        <div className="GroupSearch-banner">
          <h2 className="GroupSearch-title">Grupos</h2>
          <button
            onClick={openModalCreateGroup}
            className="GroupSearch-btn-newGroup"
          >
            Novo Grupo
          </button>
        </div>
        <div className="GroupSearch-groups">
          {groupList.map((group) => (
            <GroupItem
              key={group.group_id}
              title={group.group_name}
              id={group.group_id}
              carreer={group.group_desc}
              img={groupPlaceholder}
            />
          ))}
        </div>
      </div>
      <div className="GroupSearch-load-more">
        <button className="btn-load">Carregar Mais</button>
      </div>

        {showModalCreateGroup && (
        <ModalCreateGroup
            onClose={() => setShowModalCreateGroup(!showModalCreateGroup)} />
        )}
    </div>
  );
};

export default GroupSearch;
