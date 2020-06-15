import React from "react";
import BackgroundImage from "./img/tiling/012.png";
import PayLogo from "./img/paypal.png";
import Frame from "./img/frame.jpg";
import Responsive from "react-responsive";

const Desktop = (props) => <Responsive {...props} minWidth={767} />;
const Mobile = (props) => <Responsive {...props} maxWidth={766} />;

export default () => (
  <div
    style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundColor: `red`,
      height: `100vh`,
      backgroundSize: `500px`,
      paddingTop: `0.25em`,
      padding: `0.25em`,
      overflow: `scroll`,
    }}
  >
    <div
      style={{
        backgroundColor: `white`,
        padding: `1.25em`,
        opacity: `0.93`,
        borderRadius: `6px`,
        margin: `0 auto`,
        minWidth: `87%`,
        maxWidth: 767,
        // padding: `1.25rem 1rem`,
      }}
    >
      <h2>Stage Meets Screen - Course Materials</h2>
      <br />
      <p>
        Please visit this page periodically. I'll be posting course materials
        here. I'm so excited to begin this camp and begin working with all of
        you!
      </p>
      <div
        style={{
          backgroundColor: `#8A73B9`,
          opacity: `0.9`,
          borderRadius: `6px`,
          padding: `15px`,
          margin: `15px`,
          marginBottom: `25px`,
          fontWeight: `bold`,
          fontFamily: `Gill Sans Extrabold, sans-serif`,
          color: `white`,
        }}
      >
        June 15th: Find your frame!
      </div>
      <span style={{ marginLeft: "10px" }}>Click/tap on the image to enlarge it!</span>
      <a
        href="./static/frame-37663d3ce9f068eb45c341aea4ba736e.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Desktop>
          <img style={{ margin: `12px`, maxHeight: `800px` }} src={Frame} />
        </Desktop>
        <Mobile>
          <img style={{ margin: `12px`, maxHeight: `600px` }} src={Frame} />
        </Mobile>
      </a>
      <div
        style={{
          backgroundColor: `#8A73B9`,
          opacity: `0.9`,
          borderRadius: `6px`,
          padding: `15px`,
          margin: `15px`,
          marginBottom: `25px`,
          fontWeight: `bold`,
          fontFamily: `Gill Sans Extrabold, sans-serif`,
          color: `white`,
        }}
      >
        SMS Pledge:
      </div>
      <p style={{ margin: "20px" }}>
        I, ___insert camper name___ do solemnly promise to uphold the values of
        Stage Meets Screen Camp. I vow to be a supportive friend, a focused
        participant, and a respectful actor. I will be open to trying new
        things, to being silly, and to not taking anything too seriously. If
        something is challenging, I will remember that it just means that I’m
        growing. If something is confusing, I will be bold and ask questions. I
        will be kind to myself and others and always remember that I’m am here
        to have fun and progress as a performer and person!
      </p>
      <div
        style={{
          backgroundColor: `#8A73B9`,
          opacity: `0.9`,
          borderRadius: `6px`,
          padding: `15px`,
          margin: `15px`,
          marginBottom: `25px`,
          fontWeight: `bold`,
          fontFamily: `Gill Sans Extrabold, sans-serif`,
          color: `white`,
        }}
      >
        Dance Warmup Routines:
      </div>
      <div
        style={{
          //   backgroundColor: `#8A73B9`,
          //   opacity: `0.9`,
          //   borderRadius: `6px`,
          padding: `15px`,
          margin: `15px`,
          marginBottom: `25px`,
          fontWeight: `bold`,
          fontFamily: `Gill Sans Extrabold, sans-serif`,
          color: `black`,
        }}
      >
        <h4>Dance Warmup to "Waving Through a Window" - Floor Stretches:</h4>
        <iframe
          style={{
            // margin: `0 auto`,
            display: `block`,
            maxWidth: `100%`,
          }}
          src="https://player.vimeo.com/video/429103128"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>

        <h4>Dance Warmup to "Helpless":</h4>
        <iframe
          style={{
            // margin: `0 auto`,
            display: `block`,
            maxWidth: `100%`,
          }}
          src="https://player.vimeo.com/video/429102123"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
        <h4>Dance Warmup to "Better When We're Dancing" - Isolations:</h4>
        <iframe
          style={{
            // margin: `0 auto`,
            display: `block`,
            maxWidth: `100%`,
          }}
          src="https://player.vimeo.com/video/429101633"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
);
