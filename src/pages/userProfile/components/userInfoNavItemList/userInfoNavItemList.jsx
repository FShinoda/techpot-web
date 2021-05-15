import React from "react";
import "./userInfoNavItemList.css";


/* USER INFO NAV ITEM LIST */
const UserInfoNavItemList = ({icon, title, alt, clickEvent, isSelected}) => {
    return(
        <div className={isSelected ? "UserInfoNavItemList UserInfoNavItemList_isSelected" : "UserInfoNavItemList" }>
            <button onClick={clickEvent}>
                <img src={icon}  alt={alt} />
                <span>{title}</span>
            </button>
        </div>
    );
};

export default UserInfoNavItemList;
