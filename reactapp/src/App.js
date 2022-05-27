import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Builder from "./Builder";
import LinksPage from "./pages/LinksPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history)
    }
  }
  render() {
    return (
      <>
        <Nav auth={this.state.auth} />
        <div className="body"> 
        {/* TODO: Add route guard? */}
          <Route
            path="/"
            exact
            render={props => <Home auth={this.state.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={this.state.auth} {...props} />}
          />
          <Route
            path="/generate-links"
            render={props => <LinksPage auth={this.state.auth} {...props} />}
          />
          <Route
            path="/profile"
            render={props =>
              this.state.auth.isAuthenticated() ? (
                <Profile auth={this.state.auth} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/builder"
            render={props =>
              this.state.auth.isAuthenticated() ? (
                <Builder auth={this.state.auth} {...props} />
              ) : (
                this.state.auth.login()
              )
            }
          />
        
        </div>
      </>
    );
  }
}

export default App;
