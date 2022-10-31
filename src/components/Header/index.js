import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link, withRouter } from "react-router-dom";

import { clsx } from "@utils";
import "./styles.css";

const LOGOUT_URL = process.env.REACT_APP_LOGOUT_URL;

function Header(props) {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: LOGOUT_URL });
  };

  return (
    <section className="app-header-container">
      <nav className="nav-container">
        <ul className="nav-list-left">
          <li
            className={clsx("nav-item", {
              "active-nav": props.location.pathname === "/export-links",
            })}
          >
            <Link className="nav-link" to="/export-links">
              Export
            </Link>
          </li>
        </ul>
        <span className="nav-list-right">
          {isAuthenticated && (
            <button
              className="btn-primary nav-auth-button"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )}
        </span>
      </nav>
      <div className="nav-separator" />
    </section>
  );
}

export default withRouter(Header);
