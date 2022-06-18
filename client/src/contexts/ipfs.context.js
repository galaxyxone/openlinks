import React from "react";
import { create } from "ipfs-http-client";
import { Web3Storage } from 'web3.storage';

// Construct with token and endpoint

const client = new Web3Storage ({ token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY3RDY5ZjFBYzFENDUwRDJFRDYyRWNiRUFEMTBmODEwYUM3MDA0QTEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTU1MjI5NjI5MDIsIm5hbWUiOiJ0aGFua3lvdSJ9.As_mp65zsVQTF1JxwMEyWwT-rqdjTifzg4MvzKAawjk });

const ipfs = create(process.env.REACT_APP_IPFS_BASE_URL);

const IPFSContext = React.createContext(ipfs);

export const IPFSProvider = IPFSContext.Provider;

/**
 * @returns {import('ipfs-http-client').IPFSHTTPClient}
 */
export const useIPFS = () => React.useContext(IPFSContext);

// Integrate Web3.Storage here