/**
 * Note: The name is shamelessly taken from a well-known similar function available in Material-UI.
 * @description Used to form a single className for a HTML element
 * @param  {...string} classes
 * @returns {string}
 */
export function clsx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
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

  Object.keys(object).filter(key => object[key] != null).forEach(key => {
    finalObject[key] = object[key];
  });

  return finalObject;
}