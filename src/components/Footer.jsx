import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        
        <ul className='social-icons'>
            <li><img src="/images/facebook.png" alt='facebook icon'></img></li>
            <li><a target='_blank' rel="noreferrer" href='#'><img src="/images/instagram.png" alt='instagram icon'></img></a></li>
            <li><a target='_blank' rel="noreferrer" href='#'><img src="/images/linkedin.png" alt='linkedin icon'></img></a></li>
            <li><a href='mailto:lorddakano@gmail.com' alt='mail icon'><img src="/images/mail.png"></img></a></li>
        </ul>
        
        <p>&copy; {new Date().getFullYear()} Okane Digital Services. All rights reserved.</p>
    </div>
  )
}

export default Footer