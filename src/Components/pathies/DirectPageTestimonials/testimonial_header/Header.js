import React from 'react'
import Navbar from "../../../Navbar/Navbar"
import image1 from "./images/image1.png"
import "./Pathy_header.css"

function Header(props) {
  return (
    <div className='header'>
        <Navbar />
        <div className="pathy_header_intro"> 
          <div className='box'>
            <div className='left'>
              <h1>Testimonials-Direct</h1>
              <p>Here we have shown the shared real life experiences of people who suffered from the disease which is Migraine and used Homeopathy for their treatment. </p>
            </div>
            <img classname='headerimg' src={image1} alt="img" />
          </div>
        </div>
    </div>
  )
}

export default Header