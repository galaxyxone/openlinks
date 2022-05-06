import React, { Component } from "react";

class Builder extends Component {
  state = {
    message: "Build your Own Personal Website on IPFS"
  };

//This sends the authorization token as a fetch call- 


  render() {
    return <p>{this.state.message}</p>;
  }
}

export default Builder;

