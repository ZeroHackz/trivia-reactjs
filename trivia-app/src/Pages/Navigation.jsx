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
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
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
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/contact">
                  Host
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/chat" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/chat">
                  Chat
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