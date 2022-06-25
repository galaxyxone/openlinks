import React from "react";
import "./styles.css";

/**
 * @description Renders each individual link object.
 */
const Link = ({ id, url, removeLink }) => {
  return (
    <div className="link-container">
      <a href={url} className="link-text">
        {url}
      </a>
      <button onClick={() => removeLink(id)}>Remove</button>
    </div>
  );
};

/**
 * @description Renders the list of links array.
 * @param {{ links: Link[], removeLink: (id: string) => void }} props
 */
export default function LinksList({ links, removeLink }) {
  return (
    <div className="links-container">
      {links.map((link) => (
        <Link key={link.id} {...link} removeLink={removeLink} />
      ))}
    </div>
  );
}
