import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        {this.props.auth.isAuthenticated() ? (
          <h3>Navigate to the other tab to start building your links page!</h3>
        ) : (
          <h3>Welcome to Openlinks! Please login to continue</h3>
        )}
      </div>
    );
  }
}

export default Home;
