import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-line">
      <div className="navbar-left">
        <NavLink exact to="/">
          <img className="icon" src="./spark-logo.png" alt="loading" />
        </NavLink>
        <h2>The Spark Foundation</h2>
      </div>
      <div className="navbar-option">
        <ul>
          <NavLink
            exact
            activeClassName="activeClass"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <span className="nav-icon">Home</span>
          </NavLink>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.thesparksfoundationsingapore.org/about/vision-mission-and-values/"
            style={{ textDecoration: "none" }}
          >
            <span className="nav-icon">About</span>
          </a>
          <NavLink
            exact
            activeClassName="activeClass"
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            <span className="nav-icon">Contact Us</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
