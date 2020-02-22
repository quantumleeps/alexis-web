import React from "react"
import Layout from "../components/Layout"
import BackgroundImage from "./img/alexis_002.jpg"
import Resume from "./docs/Field Res Spring 2019.pdf"

export default () => (
  <Layout location="/about" backgroundUrl={BackgroundImage}>
    <div>
      <br />
      <span style={{ backgroundColor: `darkgrey`, padding: `16px`, opacity:  `0.45`, borderRadius: `6px`}}>click <a href={Resume} target="_blank" rel="noopener noreferrer">HERE </a> for a PDF!</span>
    </div>

  </Layout>
)