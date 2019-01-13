import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "./img/alexis.jpg"
import Resume from "./docs/Field Res OCT_2018.pdf"

export default () => (
  <Layout image={BackgroundImage}>
    <h1>Resume</h1>
    <p>click <a href={Resume}>HERE </a> for a PDF!</p>
  </Layout>
)