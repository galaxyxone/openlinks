import React from "react";
import { create } from "ipfs-http-client";
import { Web3Storage } from 'web3.storage';
import { getFilesFromPath } from 'web3.storage'

// Construct with token and endpoint

const client = new Web3Storage ({ token:  });

const files = await

getFilesFromPath('./files');
const rootCid = await



client.put(files);

const ipfs = create(process.env.REACT_APP_IPFS_BASE_URL);

const IPFSContext = React.createContext(ipfs);

export const IPFSProvider = IPFSContext.Provider;


/**
 * @returns {import('ipfs-http-client').IPFSHTTPClient}
 */
export const useIPFS = () => React.useContext(IPFSContext);

// Integrate Web3.Storage here
