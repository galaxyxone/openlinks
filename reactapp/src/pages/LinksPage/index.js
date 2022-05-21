import React, { useCallback, useReducer } from "react";
import { LINK_ACTIONS } from "../../actions";
import LinkForm from "../../containers/LinkForm";
import LinksList from "../../containers/LinksList";
import { linksReducer } from "../../reducers";

import "./styles.css";

export default function LinksPage() {
  const [links, dispatch] = useReducer(linksReducer, []);

  const removeLink = useCallback((id) => {
    dispatch({ payload: { id }, type: LINK_ACTIONS.REMOVE_LINK });
  }, []);

  const addLink = useCallback((link) => {
    dispatch({ payload: link, type: LINK_ACTIONS.ADD_LINK });
  }, []);

  return (
    <div className="links-page-container">
      {/* <h1>LinksPage</h1> */}
      <LinksList links={links} removeLink={removeLink} />
      <LinkForm addLink={addLink} />
      {links.length > 0 && <button className="export-btn">Export</button>}
    </div>
  );
}
