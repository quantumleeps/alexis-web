import React from "react";
import "./hamburger.css";
import { Link } from "gatsby";

export default () => (
  <span className="mainwrapper">
    <input id="toggle" type="checkbox" />
    <label className="hamburger" for="toggle">
      <div className="top" />
      <div className="meat" />
      <div className="bottom" />
    </label>
    <div className="nav">
      <div className="nav-wrapper">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/clips">Clips</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  </span>
);
