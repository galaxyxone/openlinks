## Configure Auth0

- Sign up for Auth0

- Create Auth0 Application within the Auth0 Dashboard to point to our React Front-End. 

  1.  Click the button that says "new applicaiton".
  2.  Choose single-page app for your configuration
  3.  Within the application uri section, Set the Login URI to (x...........) and set the "Allowed Callback URL" too http://localhost:3000/callback
   
    - The Callback URL that Auth0 will call when its done authenticating a user. The url that is called after authentication.

### env example - This is what you need to configure the enviroment variables within the project- 

/* 
REACT_APP_AUTH0_AUDIENCE=
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CALLBACK=
REACT_APP_LOGOUT_URL=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_SERVER_BASE_URL=
*/

maybe add this all within its own document... 

- Configure .env values to match your Auth0 Account

When you create your Auth0 Tenant configuration, think of the tenant like a development enviorment. It must be unique, so pick your own name- 

Then you need to create a new Auth0 App. Choose single page app and then go straight to settings. 

In settings you're going to need to add an API route. To do that... 