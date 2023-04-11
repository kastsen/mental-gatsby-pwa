import React from "react"

import '../scss/socialIcons.scss'

import gitIcon from "../images/github.png"
import linkedinIcon from "../images/linkedin.png"
import upworkIcon from "../images/upwork.svg"
import cvIcon from "../images/cv.png"
import instaIcon from '../images/free-icon-instagram-2111491.png'

const SocialIcons =() => (
  <>
    <div className="socialIcons">
      <a href="https://github.com/kastsen" target="_blank" rel="noreferrer">
        <img src={gitIcon} alt='git' loading='lazy' className='social-icon invert' width="32" height='32'/>
      </a>
      <a href="https://www.linkedin.com/in/kastsen/" target="_blank" rel="noreferrer">
        <img src={linkedinIcon} alt='linkedin' loading='lazy' className='social-icon invert linkedin' width="30" height='30'/>
      </a>
      <a href="https://www.instagram.com/sp_kava/" target="_blank" rel="noreferrer">
        <img src={instaIcon} alt='instagram' loading='lazy' className='social-icon invert instagram' width="25" height='25'/>
      </a>
      <a href="/Yury-Kastsen-JS-Typescript-HTML5-Developer.pdf" target="_blank" rel="noreferrer">
        <img src={cvIcon} alt='download cv' loading='lazy' className='social-icon invert cv' width="30" height='30'/>
      </a>
    </div>
  </>
)

export default SocialIcons
