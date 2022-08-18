const ejs = require("ejs");

const { EXPORT_API_URL } = require("./api-url");

const {
  handleResponse,
  getClientErrorResponse,
  htmlStringToFile,
  normaliseFileName,
  STATUS_CODES,
} = require("openlinks-utility");
const { templateDir } = require("./constants");

const { Web3Storage } = require("web3.storage");

/**
 * Initialise Web3 Storage Client
 * @type {Web3Storage}
 */
const client = new Web3Storage({ token: process.env.WEB3_STORAGE_API_TOKEN }); // TODO: Move client creation to utility

/**
 * @param {string} directory
 * @param {string} fileName
 * @returns {string} path to template file
 */
const getTemplateDir = (directory, fileName) => directory + fileName;

const htmlTemplatePath = getTemplateDir(templateDir, "links.ejs");

/**
 * @param {string} title
 * @param {Array<Link>} links
 */
async function handleExport(title, links) {
  // Validate if you received title and urls, throw error otherwise.
  if (title == null || title === "") {
    return getClientErrorResponse("Page Title is required!");
  }
  if (links == null || links.length === 0) {
    return getClientErrorResponse("Links are required!");
  }
  if (links.some((link) => link.title == null || link.url == null)) {
    return getClientErrorResponse(
      "Data format error! Please add title or url for every link!"
    );
  }
  try {
    // Render page using template engine
    const html = await ejs.renderFile(htmlTemplatePath, {
      title,
      links,
    });
    // Normalise title for filename
    const normalisedFilename = normaliseFileName(title);
    // Convert html string to file for sending it to Web3 Storage
    const htmlFile = htmlStringToFile(html, normalisedFilename);
    const cid = await client.put([htmlFile], { // TODO: Move file upload to utility
      name: title,
      maxRetries: 3,
    });
    // Return cid and normalised filename to the client after upload is successful!
    return handleResponse(
      { cid, filename: `${normalisedFilename}.html` },
      STATUS_CODES.SUCCESS
    );
  } catch (err) {
    console.trace("export error:", err);
    return handleResponse(
      {
        success: false,
        error: "HTML export failed, please try again later!",
      },
      STATUS_CODES.SERVER_ERROR
    );
  }
}

module.exports.handler = async (event) => {
  return handleExport(event?.title, event?.links);
};
