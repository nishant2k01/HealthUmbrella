import React from 'react'
import footerimg from './images/footerimg.png'
import facebook from './images/facebook.png'
import linkedin from './images/linkedin.png'
import instagram from './images/instagram.png'
import './footerStyles.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className='Footer-box'>
                <div className='FooterWrap'>
                    <div className='footerimg'>
                        <img src={footerimg} className='footer-logo' />
                    </div>
                    <div className='Col'>
                        <ul className='unstyled-list'>
                            <li>Join US</li>
                            <li>Contact US</li>
                            <li>FAQ's</li>
                            <li>Our Articles</li>
                            <li>Our Videos</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                    <div className='Col'>
                        <ul className='unstyled-list'>
                            <li>Video By Us</li>
                            <li>Links to Clinics</li>
                            <li>Cookies Policy</li>
                            <li>How to get started?</li>
                            <li>Disclaimer</li>
                        </ul>
                    </div>
                    <div className='Col'>
                        <ul className='unstyled-list'>
                            <li><a href='#'>Find Us on Social Network</a></li>
                            <span className='handleWrapper'>
                                <a href='https://www.facebook.com/' target='_blank'>
                                    <img src={facebook} className='facebook handles' />
                                </a>
                                <a href='https://www.linkedin.com/' target='_blank'>
                                    <img src={linkedin} className='linkedin handles' alt='' />
                                </a>
                                <a href='https://www.instagram.com/' target='_blank'>
                                    <img src={instagram} className='instagram handles' />
                                </a>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer