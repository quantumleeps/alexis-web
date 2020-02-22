import React from "react"
import Layout from "../components/Layout"
import BackgroundImage from "./img/alexis_019.jpg"

export default () => (
  <Layout location="/contact" backgroundUrl={BackgroundImage}>
    <div style={{ maxWidth: `350px`, backgroundColor: `black`, padding: `20px`, opacity:  `1`, borderRadius: `6px`, marginTop: `260px`, fontWeight: `bold`}}>
      <a href="mailto:alexisfield@gmail.com">Email me! I'd love to talk to you: AlexisField@gmail.com</a>
    </div>
  </Layout>
)