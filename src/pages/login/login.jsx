import React from "react";
import "./login.css";


/* IMPORTS */
import logo from "../../assets/logo-redborder.png";


/* LOGIN PAGE */
const LoginPage = () => {
    return(
        <div className="LoginPage flex-center">
            <div className="LoginPage-logo">
                <img src={logo} alt={"Logo da TECHPOT."} />
            </div>

            <div className="LoginPage-unfixed">
                <div className="LoginPage-unfixed-text flex-center">
                    <div className="LoginPage-unfixed-text-area">
                        <h2>Conecte-se à Plataforma da Vida Acadêmica.</h2>
                    </div>
                </div>

                <div className="LoginPage-content flex-center">
                    <div className="LoginPage-content-logo">
                        <img src={logo} alt={"Logo da TECHPOT."} />
                    </div>

                    <div className="LoginPage-content-box flex-center">
                        <div className="LoginPage-content-box-top">
                            <h1>TECHPOT</h1>
                        </div>

                        <div className="LoginPage-content-box-bottom">
                            <button>Visitantes</button>

                            <button>Alunos e Professores</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
