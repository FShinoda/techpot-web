import React from "react";
import "./groupNavItemList.css";


/* GROUP NAV ITEM LIST */
const GroupNavItemList = ({icon, icon2, title, alt, clickEvent, isSelected}) => {
    return(
        <div className={isSelected ? "Group-navBtn Group-navBtn-isSelected" : "Group-navBtn" }>
            <button onClick={clickEvent}>
                <img src={isSelected ? icon : icon2}  alt={alt} />
                <span>{title}</span>
            </button>
        </div>
    );
};

export default GroupNavItemList;
