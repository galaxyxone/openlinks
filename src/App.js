import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import ExportLinksPage from "./pages/ExportLinksPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history),
    };
  }
  render() {
    return (
      <>
        <Nav auth={this.state.auth} />
        <div className="body">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home auth={this.state.auth} {...props} />}
            />
            <Route
              path="/callback"
              render={(props) => <Callback auth={this.state.auth} {...props} />}
            />
            {this.state.auth.isAuthenticated() ? (
              <Route
                path="/export-links"
                render={(props) => (
                  <ExportLinksPage auth={this.state.auth} {...props} />
                )}
              />
            ) : null}
            <Redirect to="/" />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
