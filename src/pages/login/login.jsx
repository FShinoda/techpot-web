import React from "react";
import "./login.css";


/* IMPORTS */
import logo from "../../assets/logo-redborder.png";


/* LOGIN PAGE */
const LoginPage = () => {
    console.log()
    return(
        <div className="LoginPage">
            <div className="LoginPage-img">
                <img src={logo} alt={"Logo da TECHPOT."} />
            </div>

            <div className="LoginPage-content">
                <div className="LoginPage-content-red">
                    <div className="LoginPage-content-red-text">
                        <h2>Conecte-se à<br  />Plataforma da<br />Vida Acadêmica.</h2>
                    </div>
                </div>

                <div className="LoginPage-content-blue">
                    <div className="LoginPage-content-blue-box">
                        <div className="LoginPage-content-blue-box-heading">
                            <h1>LOGIN</h1>
                        </div>

                        <div className="LoginPage-content-blue-box-buttons">
                            <button>Visitantes</button>

                            <button><a href={process.env.REACT_APP_LOGIN_URL}>Alunos e Professores</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
