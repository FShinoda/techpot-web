import React from "react";
import "./style.css";

// Components
import BottomLine from "../BottomLine";
import UserProfileImg from "../UserProfileImg";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { USER_LOGOUT } from "../../store/_entities/User";

// Helpers
import { firstLetterUppercase } from "../../helpers/UpperFirstLetter";
import history from "../../helpers/history";

// Router
import { Link } from "react-router-dom";

const ModalUserPreferences = ({ anchorLeft, anchorTop, onClose }) => {
  const usuarioPerfil = useSelector((state) => state.entitie.user.profile);
  const usuarioId = useSelector(state => state.entitie.user.id)

  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(USER_LOGOUT());
  };

  return (
    <>
      <div
        className="ModalUserPreferencesContainer font-techpot"
        style={{ top: anchorTop + 10, left: anchorLeft + anchorLeft }}
      >
          <div className="arrow-up"></div>
        <div className="ModalUserPreferences-topbar">
          <div className="ModalUserPreferences-topbar-row1">
            <div className="ModalUserPreferencesProfilePicContainer">
              <UserProfileImg />
            </div>

            <div className="ModalUserPreferences-topbar-col2">
              <h3>
                {usuarioPerfil.u
                  ? firstLetterUppercase(usuarioPerfil.u.name)
                  : "Usuario"}
              </h3>

              {usuarioPerfil.u ? (
                usuarioPerfil.u.username ? (
                  <p> @{usuarioPerfil.u.username}</p>
                ) : null
              ) : null}
            </div>
          </div>

          <div className="BotaoMeuPerfilContainer" onClick={onClose}>
            <Link
              to={usuarioPerfil.u ? `/perfil/${usuarioId}/${usuarioPerfil.u.username}` : '/'}
              className="BotaoMeuPerfil"
            >
              Meu perfil
            </Link>
          </div>
        </div>

        <BottomLine />

        <div
          className="ModalUserPreferences-bottom"
          onClick={(onClose, logoutUser)}
        >
          <p>Sair</p>
        </div>
      </div>
      <div className="ModalUserPreferences-overlay" onClick={onClose}></div>
    </>
  );
};

export default ModalUserPreferences;
