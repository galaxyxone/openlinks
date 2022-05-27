import React, { useCallback, useReducer } from "react";
import { LINK_ACTIONS } from "../../actions";
import Export from "../../containers/Export";
import LinkForm from "../../containers/LinkForm";
import LinksList from "../../containers/LinksList";
import { useIPFS } from "../../contexts";
import { linksReducer } from "../../reducers";
import { generatePage } from "./../../api";

import "./styles.css";

export default function LinksPage({ auth }) {
  /**
   * States
   */
  const [links, dispatch] = useReducer(linksReducer, []); // Uses reducer pattern to manage links state array
  const ipfs = useIPFS();

  /**
   * Handlers
   */
  const removeLink = useCallback((id) => {
    dispatch({ payload: { id }, type: LINK_ACTIONS.REMOVE_LINK });
  }, []);

  const addLink = useCallback((link) => {
    dispatch({ payload: link, type: LINK_ACTIONS.ADD_LINK });
  }, []);

  const resetLinks = () => dispatch({ type: LINK_ACTIONS.RESET });

  /**
   * @description Handle export functionality.
   * @type {(data: { filename: string, links: Link[] }) => Promise<void>}
   */
  const handleExport = useCallback(
    async ({ filename, links }) => {
      try {
        console.log("DATA:", filename);
        const page = await generatePage({
          title: filename,
          urls: links.map((link) => link.url),
        });
        const { cid } = await ipfs.add({
          content: page,
          path: `/${filename}.html`,
        });
        await auth.updateMetaData({ file_hash: cid.toString() });
        // Replace below with whatever you want to tell to the user. I think replacing this with a toaster message will look much better to the user :)
        alert("Added file to IPFS node! and updated metadata\nHash: " + cid);
        resetLinks();
      } catch (error) {
        console.trace(error);
      }
    },
    [links]
  );

  return (
    <div className="links-page-container">
      <LinksList links={links} removeLink={removeLink} />
      <LinkForm addLink={addLink} />
      {links.length > 0 && <Export exportFile={handleExport} links={links} />}
    </div>
  );
}
