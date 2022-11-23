import { fetchHandler } from "@utils";

/**
 * @param {{title: string, links: Link[]}} data
 * @returns {Promise<string>}
 */
 export function getThemePreviews() {
  return fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/themes/previews`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(fetchHandler);
}

export function getThemeConfig() {
  return fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/themes/config`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(fetchHandler)
}
