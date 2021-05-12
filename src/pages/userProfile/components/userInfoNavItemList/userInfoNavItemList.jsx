import React from "react";
import "./userInfoNavItemList.css";


/* USER INFO NAV ITEM LIST */
const UserInfoNavItemList = ({title, clickEvent, isSelected}) => {
    return(
        <div className="UserInfoNavItemList">
            <button onClick={clickEvent}>{title}</button>
        </div>
    );
};

export default UserInfoNavItemList;
