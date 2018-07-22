import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "react-select/dist/react-select.css";

import "./assets/css/dashboard.css";
import "./assets/css/custom.css";
/*
 * we need to add an SCSS preprocessor (if needed?! Note the relevant section in `/docs/create-react-app.md`)
 * https://medium.com/@kswanie21/css-modules-sass-in-create-react-app-37c3152de9
 *
 */

/**
 * This is the main bootstrapping module
 */

import App from "./App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
registerServiceWorker();
