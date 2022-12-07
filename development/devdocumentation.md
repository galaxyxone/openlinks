# This document is for the notes and information related to the development of Openlinks. This is all Public.

## Development Enviroment

Command for version specific install of dependencies- This may not be needed because the modules are already within the app files- check to make sure

npm install auth0-js@9.13.4 auth0-lock@11.25.1 express@4.17.1 express-jwt@5.3.1 express-jwt-authz@1.0.0 jwks-rsa@1.3.0 npm-run-all@4.1.5 react-router-dom@5.2.0

After that then you need to set-up your routes within Auth0 to make sure the front-end works as intended with a dummy auth0 Login account- 

## Configure Auth0

- Sign up for Auth0

- Create Auth0 Application to point to our React Front-End. You do that using the Auth0 Interface. 

  1.  Click the button that says "new applicaiton".
  2.  Choose single-page app for your configuration
  3.  Within the application uri section, Set the Login URI to (x...........) and set the "Allowed Callback URL" too (x.........).

maybe add this all within its own document... 

- Configure .env values to match your Auth0 Account

When you create your Auth0 Tenant configuration, think of the tenant like a development enviorment. It must be unique, so pick your own name- 

Then you need to create a new Auth0 App. Choose single page app and then go straight to settings. 

## Currently Working On- 

- IPNS updates
- UI updates

## IPNS Notes

Stop wasting time and just use W3.Names. Coming up with your own configuration will take too much time Noryev... Focus on that later when there is time for that.... 

link to repo with all the w3.name help from the amazing JChris [here](https://github.com/jchris/w3ui-ipfs-camera/commit/5b463790df9a87b4246bcbf3ee0c35fe0642fe30)

------------------------------------------------------------------------------------------------------------------------------------------------
## API Information Web3.Name
openapi: 3.0.2
info:
  title: w3name API
  description: >-
    This documentation describes how to use our HTTP API for w3name.


    This API will allow you to build applications that create and manage IPNS records. IPNS is short for InterPlanetary Name System and adds a new layer to the powerful content addressing that IPFS provides. w3name is a service that provides secure, stable identifiers for content addressable and mutable data (that changes over time).


    While you can interact with this API in a simple way using our JS client library, we also provide this API on its own for you to leverage in your application.


    This API will allow you to create, update and retrieve a w3name record. However, in order to do this, you will first need to create key pair. You can do this for example through the IPNS CLI ([documentation here](https://docs.ipfs.tech/concepts/ipns/#example-ipns-setup-with-cli)).



    Once you have created a key pair, you can create and sign an IPNS record that you will be able to use with our w3name API endpoint for publishing onto the DHTs.




    ## API endpoint URL


    The main public API endpoint URL for w3name is `https://name.web3.storage`. All endpoints described in this document should be made relative to this root URL. For example, to post to the `/name/:key` endpoint, send your request to `https://name.web3.storage/name/:key`.
  version: "1.0"
servers:
  - url: https://name.web3.storage
tags:
  - name: w3name HTTP API
paths:
  "/name/{key}":
    post:
      tags:
        - w3name HTTP API
      summary: Upload a record
      description: |-
        Upload a name record
