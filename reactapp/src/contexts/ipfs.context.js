import React from "react";
import { create, IPFSHTTPClient } from "ipfs-http-client";

const ipfs = create(process.env.REACT_APP_IPFS_BASE_URL);

const IPFSContext = React.createContext(ipfs);

export const IPFSProvider = IPFSContext.Provider;

/**
 * @returns {IPFSHTTPClient}
 */
export const useIPFS = () => React.useContext(IPFSContext);
