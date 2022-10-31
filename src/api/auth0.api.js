// user lib
import { fetchHandler } from "@utils";
// auth0 config
import { AUTH0_API } from "../auth0.config";

/**
 * @param {string} userId
 * @param {string} accessToken
 * @returns {{ [user_metadata]: Metadata }}
 */
export const getUserDetails = async (userId, accessToken) => {
  return fetch(`${AUTH0_API.USERS}/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then(fetchHandler);
};

export const updateUserDetails = (userId, accessToken, details) => {
  return fetch(`${AUTH0_API.USERS}/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(details),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  }).then(fetchHandler);
};
