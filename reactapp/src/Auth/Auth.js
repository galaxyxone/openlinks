import auth0 from "auth0-js";
import "./../types.jsdoc";

export default class Auth {
/**
 * @type {auth0.Management | null}
 * @description Private property to store the Auth0 Management API client.
 */
  #auth0Management = null;
  user = null;

  constructor(history) {
    this.history = history;
    this.userProfile = null;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      scope: "openid profile read:current_user read:current_user_metadata update:current_user_metadata",
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      responseType: "token id_token",
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  // Better use react's auth0 client and use context API for components.
  initAuth0ManagementClient = () => {
    this.#auth0Management = new auth0.Management({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      token: process.env.REACT_APP_AUTH0_MANAGEMENT_TOKEN,
    });
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.setUserId(authResult.idToken);
        this.initAuth0ManagementClient();
        this.initUser();
        this.history.push("/");
      } else if (err) {
        this.history.push("/");
        alert(`Error: ${err.error}. Check the console for further details.`);
        console.log(err);
      }
    });
  };

  setUserId = (userId) => {
    this.userId = userId;
  }

  setSession = authResult => {
    console.log('auth:', authResult);
    // set the time that the access token will expire
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    // If there is a value on the `scope` param from the authResult,
    // use it to set scopes in the session for the user. Otherwise
    // use the scopes as requested. If no scopes were requested,
    // set it to nothing
    // removed this- didnt need scope perameter

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("user_id", authResult.idTokenPayload.sub); // idTokenPayload.sub is the user_id.
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  };

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // Use one of them?
    this.userProfile = null;
    this.user = null;
    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      returnTo: process.env.REACT_APP_LOGOUT_URL
    });
  };

  /**
   * Note: Sending metadata as an empty object will clear all of it.
   * @description Sets user_metadata in auth0. 
   * @param {MetaData} [metaData]
   * @returns {Prmomise<auth0.Auth0UserProfile>}
   */
  async updateMetaData(metaData = {}) {
    return new Promise((resolve, reject) => {
      const userId = localStorage.getItem('user_id');
      if (userId != null && this.#auth0Management != null) {
        this.#auth0Management.patchUserMetadata(userId, metaData, (err, user) => {
          if (err) {
            reject(err)
          } else {
            resolve(user);
          }
        })
      } else {
        reject({ err: 'Not logged In' });
      }
    });
  };

  /**
   * @description Gets complete user profile with user_metadata object.
   * @returns {Promise<auth0.Auth0UserProfile>}
   */
  async initUser() {
    const userId = localStorage.getItem('user_id');
    if (userId != null && this.#auth0Management != null) {
      this.#auth0Management.getUser(userId, (err, user) => {
        if (err) {
          console.warn('Error getting user:', err);
        } else {
          console.log('user with meta_data:', user);
          this.user = user;
        }
      });
    } else {
      console.warn('User profile not initialised, user not logged in.');
    }
  }

  //This is what you change when you take the app into production


  getAccessToken = () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No access token found.");
    }
    return accessToken;
  };

  // Extra comment: Use the profile initialised from above?
  getProfile = cb => {
    if (this.userProfile) return cb(this.userProfile);
    this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
      if (profile) this.userProfile = profile;
      cb(profile, err);
    });
  };

 
}
