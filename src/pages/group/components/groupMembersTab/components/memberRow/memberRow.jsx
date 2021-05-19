import React from "react";
import "./memberRow.css";


/* MEMBER ROW */
const MemberRow = ({redirect, img, alt, memberName, memberNick}) => {
    return(
        <div className="MemberRow">
            {/* AVATAR */}
            <div className="MemberRow-avatar">
                <a href={redirect}>
                    <figure>
                        <img src={img} alt={alt} />
                    </figure>
                </a>
            </div>


            {/* MEMBER INFO */}
            <div className="MemberRow-member">
                <a href={redirect}>
                    <h5>{memberName}</h5>
                </a>
                <span>{memberNick}</span>
            </div>
        </div>
    );
};

export default MemberRow;
