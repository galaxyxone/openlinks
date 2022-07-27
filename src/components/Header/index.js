import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles.css";

function Header(props) {
  const { isAuthenticated, login, logout } = props.auth;
  return (
    <nav className="nav-container">
      <ul className="nav-list-left">
        <li className={"nav-item" + (props.location.pathname === "/" ? " active-nav" : "")}>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        {isAuthenticated() && (
          <li
            className={
              "nav-item" + (props.location.pathname === "/export-links" ? " active-nav" : "")
            }
          >
            <Link className="nav-link" to="/export-links">
              Export Links
            </Link>
          </li>
        )}
      </ul>
      <span className="nav-list-right">
        <button
          className="btn-primary nav-auth-button"
          onClick={isAuthenticated() ? logout : login}
        >
          {isAuthenticated() ? "Log Out" : "Log In"}
        </button>
      </span>
    </nav>
  );
}

export default withRouter(Header);
