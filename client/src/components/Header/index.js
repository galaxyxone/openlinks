import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Header(props) {
  const { isAuthenticated, login, logout } = props.auth;
  return (
    <nav>
      <ul className="nav-ul">
        <span className="nav-list-left">
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated() && (
            <li>
              <Link to="/export-links">Export Links</Link>
            </li>
          )}
        </span>
        <span className="nav-list-right">
          <li>
            <button onClick={isAuthenticated() ? logout : login}>
              {isAuthenticated() ? "Log Out" : "Log In"}
            </button>
          </li>
        </span>
      </ul>
    </nav>
  );
}

export default Header;
