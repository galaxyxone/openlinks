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
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className="body"> 
        {/* TODO: Add route guard? */}
          
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
            path="/generate-links"
            render={props => <LinksPage auth={this.auth} {...props} />}
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
          <Route
            path="/builder"
            render={props =>
              this.auth.isAuthenticated() ? (
                <Builder auth={this.auth} {...props} />
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
