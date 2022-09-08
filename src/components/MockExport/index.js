import React from "react";

import "./styles.css";

const mockLinks = [
  { name: "Weekly P2P News", url: "https://galaxyx.io" },
  { name: "GalaxyX Github", url: "https://github.com/galaxyxone/" },
  { name: "GalaxyX Website", url: "https://galaxyx.io" },
];

/**
 * @description Mock Component that mimics the exported page
 */
function MockExport() {
  return (
    <section className="openlinks-mock-container">
      <h1>My OpenLinks</h1>
      {mockLinks.map((link) => (
        <a
          key={link.name}
          className="openlinks-button"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      ))}
    </section>
  );
}

export default MockExport;
