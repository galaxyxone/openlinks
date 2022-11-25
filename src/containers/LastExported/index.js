import { useMemo } from "react";
import PropTypes from "prop-types";

import { generateIPFSFileURL, getFileNameFromIPFSResourceURI } from "../../utils";
import './styles.css';
/**
 * @description Renders last exported URL message for the user.
 */
export default function LastExported({ cid, filename }) {
  const ipfsUrl = useMemo(() => generateIPFSFileURL(cid, filename), [cid, filename]);
  return (
    <div className="last-exported-container">
      <p>
        You can find your last exported page at:{" "}
        <a className="last-exported-url" target="_blank" rel="noopener noreferrer" href={ipfsUrl}>
          {getFileNameFromIPFSResourceURI(ipfsUrl)}
        </a>
      </p>
    </div>
  );
}

LastExported.propTypes = {
  cid: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
};
