import React, { Component } from "react";
import Responsive from "react-responsive";
import { Link } from "gatsby";
import HamburgerNav from "./Hamburger";

const Desktop = props => <Responsive {...props} minWidth={767} />;
const Mobile = props => <Responsive {...props} maxWidth={766} />;

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

class Layout extends Component {
  render() {
    const isHome = this.props.location === "/";
    console.log(this.props.location)

    return (
      <span>
        <div
          style={{
                  minHeight: "100%",
                  width: "100%",
                  height: "100%",
                  position: "fixed",
                  top: "0",
                  left: "0",
                  backgroundImage: `url(${this.props.backgroundUrl})`,
                  backgroundPosition: "center top",
                  backgroundSize: "cover",
                  overflowY: "scroll",
                }}
        >
          <div
            style={{ margin: `0 auto`, maxWidth: 850, padding: `1.25rem 1rem` }}
          >
            <header style={{ marginBottom: `1.5rem` }}>
              <Mobile>
                <HamburgerNav />
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
                  {/* <ListLink to="/gallery">Gallery</ListLink> */}
                  <ListLink to="/clips">Clips</ListLink>
                  <ListLink to="/contact/">Contact</ListLink>
                </ul>
              </Desktop>
            </header>
            <span style={{ width: "100%" }}>
              {isHome ? null : this.props.children}
            </span>
          </div>
        </div>
      </span>
    );
  }
}

export default Layout;
