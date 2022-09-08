import React, { Component } from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./styles.css";
import MockExport from "../../components/MockExport";
class Home extends Component {
  render() {
    return (
      <section className="home-page-content">
        <div className="home-left-content">
          <Typography variant="h2">
            A link in bio app, truly<br/>
            decentralized on IPFS
          </Typography>
          <div className="home-content-actions">
            <Button variant="contained" onClick={this.props.auth.login}>Sign Up/Log In</Button>
          </div>
        </div>
        <div className="home-right-content">
          <MockExport />
        </div>
      </section>
    );
  }
}

export default Home;
