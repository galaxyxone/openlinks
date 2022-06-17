// Note to Logan, Push .env with empty values to the branch to make it easier for yourself and other developers :)

const express = require("express");
const cors = require('cors');
const jwt = require("express-jwt"); // Validate JWT and set req.user
const jwksRsa = require("jwks-rsa"); // Retrieve RSA keys from a JSON Web Key set (JWKS) endpoint
const ejs = require('ejs');

const PORT = process.env.PORT ?? 3001;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


/**
 * @description Root template directory
 * @type {string}
 */
const templateDir = __dirname + '/templates/';

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header
  // and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true, // cache the signing key
    rateLimit: true,
    jwksRequestsPerMinute: 5, // prevent attackers from requesting more than 5 per minute
    jwksUri: `https://${
      process.env.AUTH0_DOMAIN
    }/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,

  // This must match the algorithm selected in the Auth0 dashboard under your app's advanced settings under the OAuth tab
  algorithms: ["RS256"]
});

const app = express();

/**
 * Use a JSON body parser middleware to support requests with JSON body.
 */
app.use(express.json({}));

console.log('client:'+process.env.CLIENT_DOMAIN)

app.use(cors({
  origin: process.env.CLIENT_DOMAIN,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST'],
}))

// Note: You can move these helper functions to different files.

/**
 * @description Removes unsecure response headers
 * @param {express.Request} request
 * @param {express.Response} response
 * @param {express.NextFunction} next
 * @returns {void}
 */
function removeUnsecureHeaders(_, response, next) {
  response.removeHeader('X-Powered-By');
  next();
}

/**
 * @description Utility function that generates an object with error message.
 * @param {string} message - Error message.
 * @returns {{ message: string }} - Error object.
 */
const getErrorMessage = (message) => ({ message })

/**
 * @param {string} directory
 * @param {string} fileName
 * @returns {string} path to template file
 */
const getTemplateDir = (directory, fileName) => directory + fileName;

app.use(removeUnsecureHeaders);

app.post("/generate", function (request, response) {
  const filePath = getTemplateDir(templateDir, "links.ejs");

  // Validate request's body, throw error otherwise
  if (!request.body?.title) {
    response.status(400).send(getErrorMessage('No title provided'));
  } else if (request.body?.urls?.length === 0) {
    response.status(400).send(getErrorMessage("No urls provided"));
  } else {
    ejs
      .renderFile(filePath, {
        title: request.body.title,
        urls: request.body.urls,
      })
      .then((html) => {
        response.type("html").send(html);
      })
      .catch(console.error);
  }
});

app.get("/public", function(req, res) {
  res.json({
    message: "Hello from a public API!"
  });
});

app.get("/builder", checkJwt, function(req, res) {
  res.json({
    message: "OpenLink Builder"
  });
});


// app.get("/admin", checkJwt, checkRole("admin"), function(req, res) {
//   res.json({
//     message: "Hello from an admin API!"
//   });
// });

app.listen(PORT);
console.log("API server listening on " + PORT);
