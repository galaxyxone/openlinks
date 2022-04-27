import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      // This is equivalent to calling a JSX fragment
    <> 
    <Route path="/" exact component={Home} />
    <Route path="profile" component={Profile} />
    </>
    );
  }
}


export default App;
