import React from "react"
import Layout from "../components/Layout"
import Resume from "./docs/Field Res Spring 2019.pdf"

export default () => (
  <Layout location="resume">
    <h1>Resume</h1>
    <p>click <a href={Resume} target="_blank" rel="noopener noreferrer">HERE </a> for a PDF!</p>
  </Layout>
)