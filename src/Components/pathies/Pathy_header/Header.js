import React from 'react'
import Navbar from "../../Navbar/Navbar"
import image1 from "./images/image1.png"
import "./Pathy_header.css"

function Header(props) {
  return (
    <div className='header'>
        <Navbar />
        <div className="pathy_header_intro"> 
          <div className='box'>
            <div className='left'>
              <h1>Homeopathy</h1>
              <p>Homeopathy is a medical system based on the belief that the body can cure itself. Those who practice it use tiny amounts of natural substances, like plants and minerals. They believe these stimulate the healing process.</p>
            </div>
            <img src={image1} alt="img" />
          </div>
        </div>
    </div>
  )
}

export default Header