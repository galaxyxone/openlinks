import auth0 from "auth0-js";

export default class Auth {
    constructor(history) {
        this.history = history; 
        this.auth0 = new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: process.env.REACT_APP_,
            responseType: "token id_token",
            scope: "openid profile email"
        });

    }
}