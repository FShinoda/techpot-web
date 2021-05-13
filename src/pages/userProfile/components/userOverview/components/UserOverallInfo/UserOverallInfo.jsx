import React from "react";
import "./UserOverallInfo.css";


/* USER OVERALL INFO */
const UserOverallInfo = ({img, alt, desc, info}) => {
    return(
        <div className="UserOverallInfo">
            <div className="img flex-center">
                <div className="imgSpace">
                    <img src={img} alt={alt} />
                </div>
            </div>

            <div className="desc">
                <h6>
                    {desc}<br />
                    <span>{info}</span>
                </h6>
            </div>
        </div>
    );
};

export default UserOverallInfo;
