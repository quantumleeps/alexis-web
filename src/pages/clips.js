import React from "react"
import Layout from "../components/Layout"

export default () => (
  <Layout location="/reel">
    <h2>Lights... camera... action</h2>
    <span style={{ marginRight: '10px' }}>
      <iframe title="test1" src="https://www.youtube.com/embed/7iW18mks13A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </span>
    <span style={{ marginRight: '10px' }}>
      <iframe title="test2" src="https://www.youtube.com/embed/BfRK3d107Ec" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </span>
    <span style={{ marginRight: '10px' }}>
      <iframe title="test2" src="https://www.youtube.com/embed/7nuwZETabRA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </span>
    
  </Layout>
)

