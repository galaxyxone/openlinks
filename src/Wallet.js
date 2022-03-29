import React, { Component } from "react";

class Wallet extends Component {
  state = {
    message: "",
  };

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      profile: {},
    };
  }



  // ComponentDidMount is used to
  // execute the code

  
  componentDidMount() {
    this.loadUserProfile();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ profile, error })
    );
  }
  render() {
    const { DataisLoaded, items, profile } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="Wallet">
        <h1> My Certificates of Authenticity </h1>{" "}
        <h3>
          Address:
          {(profile &&
            profile.app_metadata &&
            profile.app_metadata.walletaddr) ||
            ""}
        </h3>
        {items.map((item) => (
          <ol key={item.id}>
            {" "}
            {}
          </ol>
        ))}
      </div>
    );
  }
}

export default Wallet;
