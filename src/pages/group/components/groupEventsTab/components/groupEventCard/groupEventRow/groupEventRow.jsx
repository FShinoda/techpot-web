import React from "react";
import "./groupEventRow.css";


/* GROUP EVENT ROW */
const GroupEventRow = ({eventImg, eventImgAlt, date, title, creatorImg, creatorImgAlt, creatorName}) => {
    return(
        <div className="GroupEventRow flex-center">
            <div className="GroupEventRow-img">
                <img src={eventImg} alt={eventImgAlt} />
            </div>

            <div className="GroupEventRow-desc">
                <h2>{date}</h2>

                <h1>{title}</h1>

                {/* <div className="GroupEventRow-desc-creator">
                    <img src={creatorImg} alt={creatorImgAlt} />
                    <h4>{creatorName}</h4>
                </div> */}
            </div>
        </div>
    );
};

export default GroupEventRow;
