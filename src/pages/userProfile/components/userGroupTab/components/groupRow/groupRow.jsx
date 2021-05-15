import React from "react";
import "./groupRow.css";


/* GROUP ROW */
const GroupRow = ({redirect, img, alt, groupName, membersCount}) => {
    return(
        <div className="GroupRow">
            {/* AVATAR */}
            <div className="GroupRow_avatar">
                <a href={redirect}>
                    <figure>
                        <img src={img} alt={alt} />
                    </figure>
                </a>
            </div>


            {/* GROUP INFO */}
            <div className="GroupRow_group">
                <a href={redirect}>
                    <h5>{groupName}</h5>
                </a>
                <span>{membersCount} membros</span>
            </div>
        </div>
    );
};

export default GroupRow;
