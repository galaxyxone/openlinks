/**
 * @type {import('@auth0/auth0-react').Auth0ProviderOptions}
 */
export const auth0Config = {
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
  useRefreshTokens: true,
  scope: "openid profile read:current_user update:current_user_metadata",
};

export const AUTH0_API = {
  USERS: `https://${auth0Config.domain}/api/v2/users`,
};
