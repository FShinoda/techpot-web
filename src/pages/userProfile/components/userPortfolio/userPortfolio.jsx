import React from "react";
import "./userPortfolio.css";


/* USER PORTFOLIO */
const UserPortfolio = ({name, spec}) => {
    return(
        <div className="UserPortfolio flex-col-center">
            {/* TAB HEADING */}
            <div className="UserPortfolio_heading">
                <h2>
                    Meu Portfolio:<br />
                    <span>
                        {name}<br />
                        <span>
                            {spec}
                        </span>
                    </span>
                </h2>
            </div>


            {/* PORTFOLIO BUTTON */}
            <div className="UserPortfolio_btn">
                <button>
                    <span>VISITAR</span>
                </button>
            </div>
        </div>
    );
};

export default UserPortfolio;
