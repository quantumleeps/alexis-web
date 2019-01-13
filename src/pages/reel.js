import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout location="/reel">
    <h1>Reel</h1>
    <p>Here's where my reel will be</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZTqDz6QDstU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </Layout>
)