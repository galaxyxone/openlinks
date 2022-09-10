import { Typography } from "@mui/material";
import React, { Component } from "react";

class Callback extends Component {
  componentDidMount = () => {
    // Handle authentication if expected values are in the URL.
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  };
  render() {
    return <Typography sx={{ m: 1 }} fontWeight="bold" variant="h4">Loading...</Typography>;
  }
}

export default Callback;
