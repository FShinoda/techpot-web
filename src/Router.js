/* REACT */
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

/* PAGES */
// Login
import LoginPage from "./pages/login/login.jsx";

// Navbar
import Navbar from "./components/navbar/navbar.jsx";

// Feed
import MainFeed from "./pages/feed/mainFeed.jsx";

// Perfil de Usuário
import UserProfile from "./pages/userProfile/userProfile.jsx";

// Group Search
import GroupSearch from "./pages/groupSearchMob/groupSearch.jsx";

// Group
import Group from "./pages/group/group.jsx";

// Event Search
import EventSearch from "./pages/eventSearch/eventSearch.jsx";

// Event
import Event from "./pages/event/event.jsx";

/* Edit */
/// Edit (pagina de configurações)
import GeneralEdit from "./pages/generalEdit/generalEdit.jsx";
// Edit Acc
import AccountEdit from "./pages/generalEdit/pages/accountEdit/accountEdit.jsx";
// Edit Profile
import ProfileEdit from "./pages/generalEdit/pages/profileEdit/profileEdit.jsx";
// Edit Portifolio
import PortfolioEdit from "./pages/generalEdit/pages/portfolioEdit/portfolioEdit.jsx";
// Edit Notif
import NotifEdit from "./pages/generalEdit/pages/notifEdit/notifEdit.jsx";

// ERROR 404
import ERR_404 from "./pages/404/404.jsx";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "./store/_entities/User";
import { listEvent } from "./store/_entities/Event";
import { listGroup } from "./store/_entities/Group";
import { listPostByUser } from "./store/_entities/Post";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

const Router = () => {
  // Get User ID
  const usuarioId = useSelector((state) => state.entitie.user.id);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadInitialData = async () => {
      await dispatch(userInfo(usuarioId, true));
      await dispatch(listEvent());
      await dispatch(listGroup(usuarioId));
      await dispatch(listPostByUser(usuarioId));

      const loadinSpinner = document.getElementById("ipl-progress-indicator");
      if (loadinSpinner) {
        // fade out
        loadinSpinner.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          loadinSpinner.outerHTML = "";
        }, 2000);
      }
    };

    loadInitialData();
  }, [dispatch]);

  return (
    <>
      <Switch>

        <Route path={["/login"]} component={NoNavbar} />
        <Route component={UseNavbar} />

        <Route path="*" component={ERR_404} />


      </Switch>
    </>
  );
};


// Routes that dont use the navbar
const NoNavbar = () => {
  return (
    <>
      <Route exact path="/login" component={LoginPage} />
    </>
  )
}

// Routes that use the navbar
const UseNavbar = () => {
  return (
    <>
      <Navbar />

      <ProtectedRoute path={["/", "/feed"]} exact component={MainFeed} />

      <ProtectedRoute path="/perfil" exact component={UserProfile} />

      <ProtectedRoute path="/grupos" exact component={GroupSearch} />

      <ProtectedRoute exact path="/grupo" component={Group} />

      <ProtectedRoute exact path="/eventos" component={EventSearch} />

      <ProtectedRoute exact path="/evento" component={Event} />

      <ProtectedRoute exact path="/editar" component={GeneralEdit} />

      <ProtectedRoute exact path="/editar/conta" component={AccountEdit} />


      {/* Mobile only */}
      <ProtectedRoute exact path="/editar/perfil" component={ProfileEdit} />
      <ProtectedRoute exact path="/editar/portifolio" component={PortfolioEdit}/>
      <ProtectedRoute exact path="/editar/notificacao" component={NotifEdit} />
      
    </>
  );
};

export default Router;
