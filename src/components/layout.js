import React, { Component } from "react";
import Responsive from "react-responsive";
import { Link } from "gatsby";
import Hamburger from "../pages/img/hamburger-white.svg";

const Desktop = props => <Responsive {...props} minWidth={769} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

class Layout extends Component {
  render() {
    const isHome = this.props.location === "/";
    // const homeStyleBackground = { backgroundColor: "red" };
    // const awayStyleBackground = { backgroundColor: "green" };

    return (
      <div
        style={
          isHome
            ? {
                backgroundImage: `url(${this.props.backgroundUrl})`,
                minHeight: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%"
              }
            : { backgroundColor: "grey", minHeight: "100vh" }
        }
      >
        <div
          style={{ margin: `0 auto`, maxWidth: 850, padding: `1.25rem 1rem` }}
        >
          <header style={{ marginBottom: `1.5rem` }}>
            <Mobile>
              <img
                style={{ float: "right" }}
                src={Hamburger}
                height={32}
                width={32}
              />
            </Mobile>
            <Link
              to="/"
              style={{ textShadow: `none`, backgroundImage: `none` }}
            >
              <h3 style={{ display: `inline` }}>Alexis Field</h3>
            </Link>
            <Desktop>
              <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/about/">About me</ListLink>
                <ListLink to="/resume">Resume</ListLink>
                <ListLink to="/gallery">Gallery</ListLink>
                <ListLink to="/reel">Reel</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
              </ul>
            </Desktop>
          </header>
          {isHome ? null : this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
