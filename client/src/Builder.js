import React, { Component } from "react";

class Builder extends Component {
  state = {
    message: "Build your Own Personal Website on IPFS"
  };

  // This is where I will add the website builder components


  render() {
    return <p>{this.state.message}</p>;
  }
}

export default Builder;

// Make sure to document additions and solutions

// Return CID from IPFS gets displayed on this page

// IPFS CID returned to users metadata 
// This is the format to access IPFS site
// https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu
