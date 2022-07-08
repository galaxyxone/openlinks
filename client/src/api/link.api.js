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
