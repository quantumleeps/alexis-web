import React from "react"
import Layout from "../components/Layout"
import BackgroundImage from "./img/alexis_017.jpg"

export default () => (
  <Layout location="/about" backgroundUrl={BackgroundImage} backgroundColor={"rgb(106, 173, 190)"}>
    <div >
      <div style={{ width: `200px`}}>
        <h2>Lights... camera... action!</h2>
      </div>
    
    <div style={{ marginRight: '10px' }}>
      <iframe title="test1" src="https://www.youtube.com/embed/7iW18mks13A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <div style={{ marginRight: '10px' }}>
      <iframe title="test2" src="https://www.youtube.com/embed/BfRK3d107Ec" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <div style={{ marginRight: '10px' }}>
      <iframe title="test2" src="https://www.youtube.com/embed/7nuwZETabRA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    </div>

  </Layout>
)