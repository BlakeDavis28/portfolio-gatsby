import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/white.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Blake Davis</strong>


        <br />
          Software Engineer
        <br />
          UI Enthusiast
        <br />
          People Person
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
