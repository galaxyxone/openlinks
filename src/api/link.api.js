import { fetchHandler } from "../utils";

/**
 * @param {{title: string, links: Link[]}} data
 * @returns {Promise<string>}
 */
export function exportLinks(data) {
  return fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/export`, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(fetchHandler);
}

/**
 * @param {string} image - Base64
 * @param {string} username
 * @returns {Promise<any>}
 */
export function uploadProfilePicture(image, username) {
  return fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/upload`, {
    body: JSON.stringify({ image, username }),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(fetchHandler);
}
