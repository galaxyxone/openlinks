import React, { useCallback, useReducer, useState } from "react";
import { LINK_ACTIONS } from "../../actions";
import Export from "../../containers/Export";
import LastExported from "../../containers/LastExported";
import LinkForm from "../../containers/LinkForm";
import LinkList from "../../containers/LinkList";
import { linksReducer } from "../../reducers";
import { exportLinks } from "../../api";

import "./styles.css";

/**
 * @typedef GenerateLinksPageProps
 * @property {import("../../Auth/Auth").default} auth
 */

/**
 * @param {GenerateLinksPageProps} props
 * @returns
 */

export default function ExportLinksPage({ auth }) {
  /**
   * States
   */
  const [links, dispatch] = useReducer(linksReducer, []); // Uses reducer pattern to manage links state array
  const [isLoading, setLoading] = useState(false);

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
        setLoading(true);
        const { cid, filename: exportedFileName } = await exportLinks({
          title: filename,
          links: links.map((link) => ({ title: link.title, url: link.url })),
        });
        await auth.updateMetaData({ cid, filename: exportedFileName });
        // Replace below with whatever you want to tell to the user. I think replacing this with a toaster message will look much better to the user :)
        alert("Added file to Web3.Storage! and updated metadata\nHash: " + cid);
        resetLinks();
      } catch (error) {
        console.trace(error);
      }
      setLoading(false);
    },
    [auth]
  );

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="links-page-container">
      <LinkList links={links} removeLink={removeLink} />
      <LinkForm addLink={addLink} />
      {links.length > 0 && <Export exportFile={handleExport} links={links} />}
      {/* Only show last exported page when user is authenticated and user's data is fetched through management API successfully */}
      {auth.isAuthenticated() &&
        auth.user?.user_metadata?.cid &&
        auth.user?.user_metadata?.filename && (
          <LastExported
            cid={auth.user.user_metadata.cid}
            filename={auth.user.user_metadata.filename}
          />
        )}
    </div>
  );
}
