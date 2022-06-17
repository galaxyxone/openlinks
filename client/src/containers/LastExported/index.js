import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { generateIPFSGatewayURL } from "../../utils";
import './styles.css';
/**
 * @description Renders last exported URL message for the user.
 */
export default function LastExported({ fileHash }) {
  const ipfsUrl = useMemo(() => generateIPFSGatewayURL(fileHash), [fileHash]);
  return (
    <div className="last-exported-container">
      <p>
        You can find your last exported page at:{" "}
        <a className="last-exported-url" target="_blank" rel="noopener noreferrer" href={ipfsUrl}>
          {ipfsUrl}
        </a>
      </p>
    </div>
  );
}

LastExported.propTypes = {
  fileHash: PropTypes.string.isRequired,
};
