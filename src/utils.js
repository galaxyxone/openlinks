/**
 * Note: The name is shamelessly taken from a well-known similar function available in Material-UI.
 * @description Used to form a single className for a HTML element
 * @param  {...string} classes
 * @returns {string}
 */
export function clsx(...objects) {
  let classes = [];
  objects.filter(Boolean).forEach((object) => {
    if (typeof object === "object" && Object.values(object).every(Boolean)) {
      classes.push(
        Object.entries(object)
          .filter(([, value]) => Boolean(value))
          .map(([key, _]) => key)
          .join(" ")
      );
    } else if (typeof object === "string") {
      classes.push(object);
    }
  });
  return classes.join(" ");
}

/**
 * @description Sample method that generates a random ID. Can be replaced by any blackbox ID generation algorithm.
 * @returns {string} generates a random string ID. Length of ID is 16 by default
 */
export function generateId(length = 16) {
  if (length > 16 || length < 1) {
    throw new Error("Length must be between 1 and 64");
  }
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * @description Filters null values from the object
 * @param  {...object} objects
 * @returns {object}
 */
export function filterNullValues(object) {
  const finalObject = {};

  Object.keys(object)
    .filter((key) => object[key] != null)
    .forEach((key) => {
      finalObject[key] = object[key];
    });

  return finalObject;
}

/**
 * @description Handles each content-type of the response
 * @param {Response} response
 * @returns {Promise<Response.Body>}
 */
async function fetchContentTypeHandler(response) {
  switch (response.headers.get("content-type")) {
    case "application/json":
      return response.json();
    case "text/html":
    default:
      return response.text();
  }
}

/**
 * @description Handles
 * @param {Response} response
 * @returns {Promise<any>}
 */
export async function fetchHandler(response) {
  if (response.ok) {
    return fetchContentTypeHandler(response);
  } else {
    return response.json().then((err) => {
      throw err;
    });
  }
}

/**
 * @param {string} cid
 * @param {string} filename
 * @returns {string}
 */
export function generateIPFSFileURL(cid, filename) {
  return `https://${cid}.ipfs.dweb.link/${filename}`;
}

export function mergeRefs(...refs) {
  return (el) => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(el);
      } else {
        ref.current = el;
      }
    });
  }
}