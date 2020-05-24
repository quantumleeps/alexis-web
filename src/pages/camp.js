import React from "react";
import BackgroundImage from "./img/tiling/012.png";
import PayLogo from "./img/paypal.png";
import Pic1 from "./img/camp1.jpg";
import Pic2 from "./img/camp2.jpg";
import Responsive from "react-responsive";

const Desktop = (props) => <Responsive {...props} minWidth={767} />;
const Mobile = (props) => <Responsive {...props} maxWidth={766} />;

export default () => (
  // <Layout location="/about" backgroundUrl={BackgroundImage} backgroundColor={"rgb(238, 181, 48)"}>
  //   <div style={{ backgroundColor: `white`, padding: `20px`, opacity:  `0.65`, borderRadius: `6px`}} >
  //     <h2>Biography</h2>
  //     <p>Since weaseling her way into a community theatre production of Fiddler on the Roof at the tender age of 4, Alexis has maintained her passion for the spotlight. Her performances have ranged from the innocent to the profane with nothing identifiable in the center. Alexis has filmed commercials for both Percolate, Fidelity Investments, and the Food Network and made her feature film debut in Literally Right Before Aaron, written and directed by Ryan Eggold and starring Justin Long. She also starred in “The Office meets Hogwarts” web series,  By the Book. Onstage, Alexis Field shocked and tickled audiences in NYC and around the country with her “tequila soaked” portrayal of Anastasia’s best friend, Katherine Kavanaugh in the critically acclaimed 50 Shades the Musical. She has been seen in the NYMF production of Wearing Black and also appeared Off-Broadway and on tour in Angelina Ballerina. Other favorite roles include Percy in The Spitfire Grill, Diwata in Speech and Debate, Heidi in [tile of show], and Dorine in Tartuffe. Alexis has written and performed a one-woman cabaret called Tindering Across America, a saucy romp through sex, swiping, and song, which premiered at 54 Below. She has also had the pleasure of singing at the Lincoln Center, Joe’s Pub, and the Beechman Theatre. Alexis has studied both standard and musical improv with the Magnet Theatre and has been lucky enough to perform as a sketch house team member.  When Alexis isn't on stage or in front of a camera you can find her on a yoga mat, or singing Rock-N-Roll music to babies in NYC, or possibly eating something delicious and usually in awe of the world around her. </p>
  //     <div>
  //       <a href="https://twitter.com/lexinthecity1?lang=en" target="_blank" rel="noopener noreferrer"><img alt="twitter link" style={{ width: '30px', height: '30px' }}src={Twitter} /></a>
  //       <a href="https://www.instagram.com/lexinthecity1/" target="_blank" rel="noopener noreferrer"><img alt="instagram link" style={{ marginLeft: '25px', width: '30px', height: '30px' }}src={Instagram} /></a>

  //       {/* <span><a href="https://twitter.com/lexinthecity1?lang=en"><img style={{ width: '20px', height: '20px' }}src={Twitter} />@lexinthecity1</a></span>
  //       <span><a href="https://www.instagram.com/lexinthecity1/">@lexinthecity1</a></span> */}
  //     </div> https://www.patterncooler.com/#a96b96c12Cd12Ce0f0g64hF3C73D8A73B9iDEj0k49lE5mE5
  //   </div>

  // </Layout>
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
    <Desktop><br /></Desktop>
    <div
      style={{
        backgroundColor: `white`,
        padding: `1.25em`,
        opacity: `0.9`,
        borderRadius: `6px`,
        margin: `0 auto`,
        minWidth: `87%`,
        maxWidth: 767,
        // padding: `1.25rem 1rem`,
      }}
    >

      <Desktop>
        
      <img
          style={{ margin: `12px`, maxHeight: `400px`, float: `right` }}
          src={Pic2}
        />
      </Desktop>

      <h2>Stage Meets Screen</h2>
      <h2>A Virtual Camp for Young Performers!</h2>
      <br />
      <Mobile>
        <img
          style={{ margin: `12px`, maxHeight: `200px`, float: `right` }}
          src={Pic2}
        />
      </Mobile>
      
      <p>
        As performers, it is of the utmost importance to be flexible and when
        things don’t go as planned, to quickly adjust and go on with the show!
        In this spirit of resiliency, it is my pleasure to announce Stage Meets
        Screen: a virtual camp for young performers!
      </p>
      <p>
        Over the course of two weeks, your child will be digitally immersed in
        an online class with NYC-based Actor and Musical Theatre Educator,
        Alexis Field. Together they’ll sing, dance, play, and even meet working
        professionals in theater and television!
      </p>
      <p>
        Each child will build and nurture their confidence, musicality,
        kinesthetic awareness, focus, endurance, collaboration, and mindfulness
        - and have a total blast doing it!
      </p>
      <p>
        Class sizes will be limited to 10 students so that each performer will
        get their chance to shine!
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
        Two Weeks of in-depth coaching, mentorship, and fun to bring out the
        best in your superstar!!
      </div>
      <iframe style={{
        margin: `0 auto`,
        display: `block`,
        maxWidth: `100%`
      }} src="https://player.vimeo.com/video/422037211" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>


      <u>Future Stars:</u>
      <br />
      Going into 1st - 5th Grade
      <p>Meets: June 15th, 17th, 19th, 22nd, 24th, 26th (12:30pm-3pm EST)</p>
      <p>
        In this jampacked and dynamic 2.5 hour session, our younger group will
        learn the basics of song and dance while collaborating on a group
        musical number! Our 10 lucky campers will play games to build skills,
        promote confidence, and learn basics of performing all while connecting
        with their fellow campers. Our little performers will also receive
        materials so they can rehearse on their own. Each day, we’ll begin with
        both a vocal and physical warm up to build range and skills. Improv
        games will be taught to help our stars learn to respond swiftly,
        organically, and not take anything too seriously. Every day will end
        with a Q&A where they’ll get to chat with an actual designer, casting
        director, Broadway actor, composer, or other industry professional. Our
        two weeks will culminate in a group music video performance that will
        commemorate our special time together!
      </p>
      <u>Future Legends:</u>
      <br />
      Going into 6th-9th Grade
      <p>Meets: June 15th, 17th, 19th, 22nd, 24th, 26th (2:30pm - 5pm EST)</p>
      <p>
        In this older group, actors will begin each day with a Q&A where they’ll
        get to chat with an actual designer, casting director, Broadway actor,
        composer, or other industry professional. They’ll learn the fundamentals
        of theatre through song, dance, and games much like the younger group
        but they’ll also take part in an immersive “song study”. Each “Future
        Legend” will get the opportunity to collaborate with Miss Alexis on the
        first day, and based on these initial discussions, they will then be
        assigned their very own short song that fits their personality and vocal
        range. Throughout the sessions, Miss Alexis will coach each actor
        through their solo to help them connect with the material and create
        their own unique performance!
      </p>
      <b>Pricing:</b> $325
      <br />
      <b>Early Registration (by June 5, 2020):</b> $275
      <br />
      <p>
        Class sizes will be limited to 10 students, so register now to reserve
        your spot today!
      </p>
      <p>
        To enroll your child, please kindly complete the registration form and
        then send your payment via Paypal. You will receive a confirmation email
        within 24 hours.
      </p>
      1.{" "}
      <a
        href="https://form.jotform.com/201426411530137"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: `underline`,
          color: `darkgreen`,
        }}
      >
        CLICK HERE TO FILL OUT THE REGISTRATION FORM
      </a>
      <br />
      2.{" "}
      <a
        href="https://paypal.me/FutureStarAndLegend?locale.x=en_US"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{
            border: `0`,
            margin: `0`,
            padding: `0`,
          }}
          src={PayLogo}
          alt="Buy now with PayPal"
        />
      </a>
      <br />
      <br />
      <p>
        If for any reason your child would like to participate but admission is
        cost prohibitive please{" "}
        <a
          style={{
            textDecoration: `underline`,
            color: `darkgreen`,
          }}
          href="mailto:alexisfield@gmail.com"
        >
          email Miss Alexis directly at AlexisField@gmail.com
        </a>
        .
      </p>
      <br />
      <br />
      <p>
        <u>About Miss Alexis:</u>
      </p>
      <p>
        A proud member of Actors Equity, Alexis is so grateful to share her love
        of theatre with the stars of tomorrow!! She is the resident
        director/choreographer for the Cortland Repertory Theater’s Showstoppers
        & Superstars theater camp! After receiving her BFA in Musical Theatre
        from Webster Conservatory, Alexis moved to NYC where she made her
        Off-Broadway debut in 2010 with Angelina Ballerina the Musical. Since
        then she has starred in numerous regional productions and has had the
        great fortune to return to Off-Broadway and tour with 50 Shades the
        Musical Parody and most recently with Pete The Cat! When she has the
        time, Alexis enjoys creating her own work as well. She's been lucky
        enough to produce, write, and star in two separate one woman productions
        and has had the privilege of singing at prestigious NYC venues from
        Feinstein's/54 Below to the Lincoln Center. She made her SAG debut in
        the film, Literally Right Before Aaron, starring Justin Long. You can
        also catch Alexis dabbling in the magical/officespacey world of the web
        series, By The Book written by Riley Thomas. Alexis received her Yoga
        Teacher Certification in 2018 from Kripalu and has a committed daily
        meditation practice. When not acting Alexis enjoys teaching Baby Music,
        Baby Developmental Movement, Ballet, and Yoga.
      </p>
      <a
        style={{
          textDecoration: `underline`,
          color: `darkgreen`,
        }}
        href="http://www.thealexisfield.com"
      >
        TheAlexisField.com
      </a>
      <br />
      <br />
      <p>
        <u>Requirements for SMS Camp:</u>
      </p>
      <ul>
        <li>
          A computer in a well-lit location where there is space to move around
          safely and comfortably
        </li>
        <li>Ability to join a Zoom meeting</li>
        <li>A desire to sing, dance, learn, have fun, and be silly</li>
        <li>Respect for your fellow players and Miss Alexis</li>
        <li>
          A device to record your final performance (such as a smart phone) -
          for our music video
        </li>
        <li>Water</li>
      </ul>
    </div>
  </div>
);
