import auth0 from "auth0-js";

export default class Auth {
  constructor(history) {
    this.history = history;
    this.userProfile = null;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      responseType: "token id_token",
      scope: "openid profile email",
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);

        this.history.push("/");
      } else if (err) {
        this.history.push("/");
        alert(`Error: ${err.error}. Check the console for further details.`);
        console.log(err);
      }
    });
  };

  setSession = (authResult) => {
    // set the time that the access token will expire
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);

  };

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.userProfile = null;
    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      returnTo: "http://localhost:3000",
    });
  };

  getAccessToken = () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No access token found.");
    }
    return accessToken;
  };

  getProfile = (cb) => {
    if (this.userProfile) return cb(this.userProfile);
    this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
      let new_profile = {};
      if (profile) {
        new_profile = profile;
        this.getUserMetaData(profile)
          .then((data) => data)
          .then((data) => {
            new_profile = { ...profile, ...data };
            this.userProfile = { ...profile, ...data };
            cb(new_profile);
          });
      }
      cb(new_profile, err);
    });
  };
  updateMetaData = () => {
    const meta = "0xc92E7DDfF00fbd6A91d7984B0c72aEd0b5556562";
    fetch("/user/manifestCustomer", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + this.getAccessToken(),
      },
      body: {
        address: meta,
      },
      json: true,
    })
      .then((response) => {
        if (response.ok) return response.json();
        return {};
      })
      .then((response) => response)
      .catch((error) => {
        console.log({ error });
        return {};
      });
  };

  getUserMetaData = (profile) => {
    return fetch("/user/get_user", {
      method: "get",
      headers: {
        Authorization: "Bearer " + this.getAccessToken(),
      },
      json: true,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return {};
      });
  };
}
