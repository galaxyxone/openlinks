import PropTypes from "prop-types";

import { buildBioUrl, getBioUrlName } from "../../utils";
import "./styles.css";

/**
 * @description Renders last exported URL message for the user.
 */
export default function LastExported({ urlId }) {

  if (!urlId) return null;

  return (
    <div className="last-exported-container">
      <p>
        View your page at:{" "}
        <a
          className="last-exported-url"
          target="_blank"
          rel="noopener noreferrer"
          href={buildBioUrl(urlId)}
        >
          {getBioUrlName(urlId)}
        </a>
      </p>
    </div>
  );
}

LastExported.propTypes = {
  urlId: PropTypes.string.isRequired,
};
