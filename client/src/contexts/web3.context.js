import React from "react";
import { create } from "ipfs-http-client";

const ipfs = create(process.env.REACT_APP_IPFS_BASE_URL);

const IPFSContext = React.createContext(ipfs);

export const IPFSProvider = IPFSContext.Provider;

/**
 * @returns {import('ipfs-http-client').IPFSHTTPClient}
 */
export const useIPFS = () => React.useContext(IPFSContext);

// Integrate Web3.Storage here