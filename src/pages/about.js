import React from "react"
import Layout from "../components/Layout"
import BackgroundImage from "./img/alexis_001.jpg"

import Twitter from "./img/twitter.svg"
import Instagram from "./img/instagram.svg"


export default () => (
  <Layout location="/about" backgroundUrl={BackgroundImage}>
    <div style={{ backgroundColor: `white`, padding: `20px`, opacity:  `0.65`, borderRadius: `6px`}} >
      <h2>Biography</h2>
      <p>Since weaseling her way into a community theatre production of Fiddler on the Roof at the tender age of 4, Alexis has maintained her passion for the spotlight. Her performances have ranged from the innocent to the profane with nothing identifiable in the center. Alexis has filmed commercials for both Percolate, Fidelity Investments, and the Food Network and made her feature film debut in Literally Right Before Aaron, written and directed by Ryan Eggold and starring Justin Long. She also starred in “The Office meets Hogwarts” web series,  By the Book. Onstage, Alexis Field shocked and tickled audiences in NYC and around the country with her “tequila soaked” portrayal of Anastasia’s best friend, Katherine Kavanaugh in the critically acclaimed 50 Shades the Musical. She has been seen in the NYMF production of Wearing Black and also appeared Off-Broadway and on tour in Angelina Ballerina. Other favorite roles include Percy in The Spitfire Grill, Diwata in Speech and Debate, Heidi in [tile of show], and Dorine in Tartuffe. Alexis has written and performed a one-woman cabaret called Tindering Across America, a saucy romp through sex, swiping, and song, which premiered at 54 Below. She has also had the pleasure of singing at the Lincoln Center, Joe’s Pub, and the Beechman Theatre. Alexis has studied both standard and musical improv with the Magnet Theatre and has been lucky enough to perform as a sketch house team member.  When Alexis isn't on stage or in front of a camera you can find her on a yoga mat, or singing Rock-N-Roll music to babies in NYC, or possibly eating something delicious and usually in awe of the world around her. </p>
      <div>
        <a href="https://twitter.com/lexinthecity1?lang=en" target="_blank" rel="noopener noreferrer"><img alt="twitter link" style={{ width: '30px', height: '30px' }}src={Twitter} /></a>
        <a href="https://www.instagram.com/lexinthecity1/" target="_blank" rel="noopener noreferrer"><img alt="instagram link" style={{ marginLeft: '25px', width: '30px', height: '30px' }}src={Instagram} /></a>

        {/* <span><a href="https://twitter.com/lexinthecity1?lang=en"><img style={{ width: '20px', height: '20px' }}src={Twitter} />@lexinthecity1</a></span>
        <span><a href="https://www.instagram.com/lexinthecity1/">@lexinthecity1</a></span> */}
      </div>
    </div>

  </Layout>
)