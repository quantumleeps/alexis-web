import React from "react"
import Layout from "../components/layout"
import Resume from "./docs/Field Res OCT_2018.pdf"

export default () => (
  <Layout location="resume">
    <h1>Resume</h1>
    <p>click <a href={Resume} target="_blank" rel="noopener noreferrer">HERE </a> for a PDF!</p>
  </Layout>
)