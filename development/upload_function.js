const { Blob, File, Web3Storage } = require("web3.storage");

/**
 * Initialise Web3 Storage Client
 * @type {Web3Storage}
 */
const client = new Web3Storage({ token: process.env.WEB3_STORAGE_API_TOKEN });

/**
 * @param {string} cid
 * @param {string} filename
 * @returns {string}
 */
function generateIPFSFileURL(cid, filename) {
    return `https://${cid}.ipfs.dweb.link/${filename}`;
}

const mimeTypeRegex = /image[/](png|jpeg|jpg)/

/**
 * @description Converts base64 string to binary data
 */ 
function base64ToBuffer(string) {
    const base64 = string.split(';base64,').pop(); // Remove data header from the encoded string
    return Buffer.from(base64, 'base64') // decode base64 encoded string
}
/**
 * @param {string} data
 * @returns {string}
 * @description extracts mimeType from base64 string 
 */ 
function getMimeTypeFromBase64(data) {
    return data.match(mimeTypeRegex)[0]
}

/**
 * @param {string} username
 * @returns {string}
 */
function generateNameForProfilePicture(username) {
    return `${username}-profile`
}

/**
 * @param {string} mimeType
 * @example getFileExtensionFromMimeType('image/png') -> png
 */
function getFileExtensionFromMimeType(mimeType) {
    return mimeType.split('/')[1]
}

// TODO: Convert lambdas back to proxy integration to stick to our previous framework.
exports.handler = async (event) => {
    try {
        // 
        if (event.image == null && typeof event.image === 'string') {
            throw new Error("base64 encoded image is required!");
        }
        if (event.username == null && typeof event.username === 'string') {
            throw new Error("username is required!");
        }
        // Required variables
        const imageBuffer = base64ToBuffer(event.image); // Get binary image
        const contentType = getMimeTypeFromBase64(event.image); // Get MimeType of file
        const profileName = generateNameForProfilePicture(event.username);
        // File variables
        const fileExtension = getFileExtensionFromMimeType(contentType);
        const fileName = `${profileName}.${fileExtension}`;
        // Do the required conversion i.e. Binary data -> Blob -> File for web3.storage @see https://web3.storage/docs/how-tos/store/
        const blob = new Blob([imageBuffer], { type: contentType });
        const imageFile = new File([blob], fileName, { type: contentType });

        // Upload to Web3Storage
        const cid = await client.put([imageFile], {
            name: profileName,
            maxRetries: 2
        });
        // Return File URL
        return {
            success: true,
            message: 'Successfully added to web3.storage',
            fileUrl: generateIPFSFileURL(cid, fileName)
        }
    } catch (err) {
        console.log('Error!')
        console.log(err)
        return {
            success: false,
            message: err?.message || 'Failed to upload image to web3',
            fileUrl: null
        }
    }
};
