import React from "react";
import "./groupEventsTab.css";


/* COMPONENTS */
import GroupEventCard from "./components/groupEventCard/groupEventCard.jsx";


/* GROUP EVENTS TAB */
const GroupEventsTab = () => {
    return(
        <div className="GroupEventsTab">
            <GroupEventCard headingTitle={"Eventos próximos"} headingButtonName={"Criar evento"} />
            <GroupEventCard headingTitle={"Eventos anteriores"} />
        </div>
    );
};

export default GroupEventsTab;
