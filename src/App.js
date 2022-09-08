import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./containers/Home";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import ExportLinksPage from "./pages/ExportLinksPage";
import Header from "./components/Header";

import "./app.styles.css";
import { Typography } from "@mui/material";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history),
    };
  }
  render() {
    const isAuthenticated = this.state.auth.isAuthenticated();
    return (
      <div className="app-container">
        <Header auth={this.state.auth} />
        <div className="routes-container">
          <Switch>
            <Route
              path="/callback"
              render={(props) => <Callback auth={this.state.auth} {...props} />}
            />
            {isAuthenticated ? (
              <Route
                path="/export-links"
                render={(props) => (
                  <ExportLinksPage auth={this.state.auth} {...props} />
                )}
              />
            ) : (
              <Route
                path="/"
                exact
                render={(props) => <Home auth={this.state.auth} {...props} />}
              />
            )}
            {isAuthenticated ? (
              <Redirect to="/export-links" />
            ) : (
              <Redirect to="/" />
            )}
          </Switch>
        </div>
        <footer className="app-footer">
            <Typography variant="caption">Openlinks.io</Typography>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
