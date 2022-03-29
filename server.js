const express = require("express");
require("dotenv").config();
const jwt = require("express-jwt"); // Validate JWT and set req.user
const jwksRsa = require("jwks-rsa"); // Retrieve RSA keys from a JSON Web Key set (JWKS) endpoint
const axios = require("axios");
const checkJwt = jwt({

  //Dynamically provide a signing key based on the kid in the header
  //and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true, //cache the signing key
    rateLimit: true,
    jwksRequestsPerMinute: 5, //precent attackers from requesting more than 5 per minute
    jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  //Validate the audience and the issuer.
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,
});

const app = express();

app.get("/ipfs", function(req, res) {
  res.json({
    message: "Hello from a public API! ie website, webstore",
  });
});

app.get("/private", checkJwt, function(req, res) {
  res.json({
    message: "Hello from a private API!",
  });
});

const getManagementToken = () => {
  var request = require("request");
  return new Promise((resolve, reject) => {
    var options = {
      method: "POST",
      url: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.REACT_APP_AUTH0_CLIENT_BACKEND_ID,
        client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
        audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
        grant_type: "client_credentials",
      }),
    };

    request(options, function(error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
};

app.post("/user/manifestCustomer", checkJwt, function(req, res) {
  getManagementToken().then((data) => {
    const token = data.access_token;
    return new Promise((resolve, reject) => {
      var json_data = JSON.stringify({
        app_metadata: {
          walletaddr: "0xc92E7DDfF00fbd6A91d7984B0c72aEd0b5556562",
        },
      });
      var config = {
        method: "patch",
        url:
          `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/` +
          req.user.sub,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: json_data,
      };
      axios(config)
        .then(function(response) {
          resolve(response.data);
        })
        .catch(function(error) {
          console.log(error);
          reject(error);
        });
    });
  });
});

app.get("/user/get_user", checkJwt, function(req, res) {
  getManagementToken().then((data) => {
    const token = data.access_token;
// jwt parsing correctly from JSON to HTML/XML

    return new Promise((resolve, reject) => {
      var config = {
        method: "get",
        url: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${req.user.sub}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      axios(config)
        .then(function(response) {
          res.json(response.data);
        })
        .catch(function(error) {
          console.log(error);
          reject(error);
        });
    });
  });
});

app.listen(3001);

console.log("API server listening on " + process.env.REACT_APP_API_URL);
