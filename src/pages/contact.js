import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "./img/alexis.jpg"

export default () => (
  <Layout image={BackgroundImage}>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:alexisfield@gmail.com">alexisfield@gmail.com</a>
    </p>
  </Layout>
)