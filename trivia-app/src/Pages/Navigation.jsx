import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">
            TREEVIA
            </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Main
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/single-player" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/single-player">
                  Single-Player
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/lobbies" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/lobbies">
                  Lobbies (PvP)
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/lobby-host" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/lobby-host">
                  Host
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/login" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);