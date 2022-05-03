import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Public from "./Public";
import Private from "./Private";
import Courses from "./Courses";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className="body">
          <Route
            path="/"
            exact
            render={props => <Home auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={this.auth} {...props} />}
          />
          <Route
            path="/profile"
            render={props =>
              this.auth.isAuthenticated() ? (
                <Profile auth={this.auth} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/public" component={Public} />
          <Route
            path="/private"
            render={props =>
              this.auth.isAuthenticated() ? (
                <Private auth={this.auth} {...props} />
              ) : (
                this.auth.login()
              )
            }
          />
          <Route
            path="/courses"
            render={props =>
              this.auth.isAuthenticated() &&
              this.auth.userHasScopes(["read:courses"]) ? (
                <Courses auth={this.auth} {...props} />
              ) : (
                this.auth.login()
              )
            }
          />
        </div>
      </>
    );
  }
}

export default App;
