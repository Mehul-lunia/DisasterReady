import React from 'react'
import CardContainer from "./CardContainer"
import CardContainer1 from './CardContainer1'
import CardContainer2 from './CardContainer2'
import Footer from './Footer'
import "./Earthquake.css";

function Earthquakedata() {
  return (
    <>
      <div ClassName="Content-charts">
        <h1>India</h1>
        <CardContainer />
        <h1>USA</h1>
        <CardContainer1 />
        <h1>China</h1>
        <CardContainer2 />
        <Footer />
      </div>  
    </>

  )
}
export default Earthquakedata;