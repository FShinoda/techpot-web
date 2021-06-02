import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import Router from "./Router";

// Redux
import store from "./store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Router></Router>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
