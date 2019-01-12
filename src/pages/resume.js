import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "./img/alexis.jpg"

export default () => (
  <Layout image={BackgroundImage}>
    <h1>Resume</h1>
    <p>click <a href="/">HERE </a> for a PDF!</p>
  </Layout>
)