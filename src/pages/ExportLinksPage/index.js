import React, { useCallback, useState } from "react";
import Export from "../../containers/Export";
import LastExported from "../../containers/LastExported";
import LinkForm from "../../containers/LinkForm";
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
  const [links, setLinks] = useState([]);
  const [isLoading, setLoading] = useState(false);

  /**
   * @descriptions Resets links state for the export
   */
  const resetLinks = () => setLinks([]);

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
          links: links,
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

  /**
   * @param {Link[]} links
   * @description Sets links state when submitting form.
   */
  const handleFormSubmit = useCallback((links) => {
    setLinks(links);
  }, [])

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="links-page-container">
      {/* Temporarily disable Links Form when submit is hit */}
      {links.length === 0 && <LinkForm onSubmit={handleFormSubmit} />}
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
