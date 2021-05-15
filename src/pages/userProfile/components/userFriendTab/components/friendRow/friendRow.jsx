import React from "react";
import "./friendRow.css";


/* FRIEND ROW */
const FriendRow = ({redirect, img, alt, friendName, friendCommon}) => {
    return(
        <div className="FriendRow">
            {/* AVATAR */}
            <div className="FriendRow_avatar">
                <a href={redirect}>
                    <figure>
                        <img src={img} alt={alt} />
                    </figure>
                </a>
            </div>


            {/* FRIEND INFO */}
            <div className="FriendRow_friend">
                <a href={redirect}>
                    <h5>{friendName}</h5>
                </a>
                <span>{friendCommon} amigo(s) em comum</span>
            </div>
        </div>
    );
};

export default FriendRow;
