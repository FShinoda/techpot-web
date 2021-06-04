import React, { useState } from "react";
import "./eventSearch.css";

// Components
import EventItem from "./components/eventItem/eventItem";

// Assets - placeholder
import groupPlaceholder from "../../assets/img/group/groupPlaceholder.jpeg";

// Antd Icons
import { LeftOutlined } from "@ant-design/icons";

// Redux
import { useSelector } from "react-redux";

const EventSearch = () => {
  // Evento
  const eventList = useSelector((state) => state.entitie.event.eventsList);



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
          <h2 className="GroupSearch-title">Eventos</h2>
          <button  className="GroupSearch-btn-newGroup">Novo Evento</button>
        </div>

        <div className="GroupSearch-groups">
          {eventList.map((eventos) => (
            <EventItem
              key={eventos.event_id}
              title={eventos.event_name}
              carreer={eventos.event_type_name}
              img={groupPlaceholder}
              id={eventos.event_id}
              date={eventos.event_dateInit}
            />
          ))}
        </div>
      </div>
      <div className="GroupSearch-load-more">
        <button className="btn-load">Carregar Mais</button>
      </div>

    </div>
  );
};

export default EventSearch;
