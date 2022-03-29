import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Ipfs from "./Ipfs";
import Wallet from "./Wallet";

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
          <Route path="/profile" 
          render={ props => 
            this.auth.isAuthenticated() ? (
            <Profile auth={this.auth} {...props} /> 
            ) : (
            <Redirect to="/" /> 
            )
          } 
          />
          <Route path="/ipfs" component={Ipfs} />
          <Route
            path="/wallet"
            render={props => <Wallet auth={this.auth} {...props} />}
          />
        </div>
      </>
    );
  }
}

export default App;
