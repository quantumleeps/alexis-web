import React from "react"
import Layout from "../components/Layout"

export default () => (
  <Layout location="/reel">
    <h1>Clip</h1>
    <p>Here's where my reel will be</p>
    <iframe title="test1" src="https://www.youtube.com/embed/ZTqDz6QDstU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </Layout>
)