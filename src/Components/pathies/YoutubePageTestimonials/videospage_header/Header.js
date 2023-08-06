import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from "../../../Navbar/Navbar"
import image1 from "./images/image 21.png"
import "./Pathy_header.css"

function Header(props) {
  return (
    <div className='header'>
        <Navbar />
        <div className="aryan_pathy_header_intro"> 
          <div className='box'>
            <div className='left'>
              <h1>Youtube videos</h1>
              <p>Here are the testimonials from Youtube about migraine treated with Homeopathy in a summarised and well orgainised form. </p>
            </div>
            <img className='headerimg' src={image1} alt="img" />
          </div>
        </div>
    </div>
  )
}

export default Header