import React from "react";
import "./UserOverallInfo.css";


/* USER OVERALL INFO */
const UserOverallInfo = ({img, alt, desc, info}) => {
    return(
        <div className="UserOverallInfo">
            {/* IMAGE */}
            <div className="UserOverallInfo_img flex-center">
                <div className="UserOverallInfo_imgSpace">
                    <img src={img} alt={alt} />
                </div>
            </div>


            {/* DESCRIPTION */}
            <div className="UserOverallInfo_desc">
                <h6>
                    {desc}<br />
                    <span>{info}</span>
                </h6>
            </div>
        </div>
    );
};

export default UserOverallInfo;
