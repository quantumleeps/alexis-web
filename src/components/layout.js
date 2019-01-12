import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ image, children }) => (
  <div
    style={{
      backgroundImage:
      `url(${ image })`,
      minHeight: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      // filter: 'blur(8px)',
      // WebkitFilter: 'blur(8px)',
      // opacity: '0.25',
    }}
  >
    <div style={{ margin: `0 auto`, maxWidth: 850, padding: `1.25rem 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Alexis Field</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/about/">About me</ListLink>
          <ListLink to="/resume">Resume</ListLink>
          <ListLink to="/gallery">Gallery</ListLink>
          <ListLink to="/reel">Reel</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  </div>
);
