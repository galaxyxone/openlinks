import React, { Component } from "react";

class Builder extends Component {
  state = {
    message: "Build your Own Personal Website on IPFS"
  };




  render() {
    return <p>{this.state.message}</p>;
  }
}

export default Builder;

