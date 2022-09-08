import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles.css";

function Header(props) {
  const { isAuthenticated, logout } = props.auth;
  return (
    <section className="app-header-container">
      <nav className="nav-container">
        <ul className="nav-list-left">
          {isAuthenticated() ? (
            <li
              className={
                "nav-item" +
                (props.location.pathname === "/export-links"
                  ? " active-nav"
                  : "")
              }
            >
              <Link className="nav-link" to="/export-links">
                Export Links
              </Link>
            </li>
          ) : (
            <li
              className={
                "nav-item" +
                (props.location.pathname === "/" ? " active-nav" : "")
              }
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          )}
        </ul>
        <span className="nav-list-right">
          {isAuthenticated() && (
            <button className="btn-primary nav-auth-button" onClick={logout}>
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
