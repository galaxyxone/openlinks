import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Route component={App} />
  </Router>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ServiceWorker.unregister();