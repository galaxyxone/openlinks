// core
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
// ui lib
import Auth0MetadataProvider from "./contexts/auth0-metadata.context";
import { ThemeProvider } from "@mui/material";
// components
import App from "./App";
import theme from "./theme";
// user lib
import { auth0Config } from "./auth0.config";
// styles
import "./index.css";
import "./global.styles.css";

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Auth0Provider {...auth0Config}>
        <Auth0MetadataProvider>
          <App />
        </Auth0MetadataProvider>
      </Auth0Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
