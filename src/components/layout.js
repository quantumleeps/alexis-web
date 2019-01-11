import React from "react";
import { Link } from "gatsby";
import { withPrefix } from 'gatsby'
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <div
    style={{
      backgroundImage: 'url("https://doc-04-4c-docs.googleusercontent.com/docs/securesc/6ttmmsq65d40dgppctjklagfjc7klb5v/2c7c844ov7jd29qab3ie3s6h0tu0uinc/1547215200000/10178672783849291803/10178672783849291803/1oYlC7U763fsFh6avxpa-i6R25plsFkEv")',
      minHeight: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "50% 50%"
    }}
  >
    <div style={{ margin: `0 auto`, maxWidth: 750, padding: `1.25rem 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Alexis Field</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/gallery">Gallery</ListLink>
          <ListLink to="/reel">Reel</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  </div>
);
