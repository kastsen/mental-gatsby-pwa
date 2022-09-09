import gitIcon from "../images/github.png"
import linkedinIcon from "../images/linkedin.png"
import upworkIcon from "../images/upwork.svg"
import cvIcon from "../images/cv.png"
import mailIcon from '../images/free-icon-close-note-70308.png'
import instaIcon from '../images/free-icon-instagram-2111491.png'

import React from "react"

import '../scss/socialIcons.scss'

const SocialIcons =() => (
  <>
    <div className="socialIcons">
      <a href="https://github.com/kastsen" target="_blank" rel="noreferrer">
        <img src={gitIcon} alt='git' loading='lazy' className='social-icon invert' width="32" height='auto'/>
      </a>
      <a href="https://www.linkedin.com/in/kastsen/" target="_blank" rel="noreferrer">
        <img src={linkedinIcon} alt='linkedin' loading='lazy' className='social-icon invert linkedin' width="30" height='auto'/>
      </a>
      <a href="https://www.upwork.com/freelancers/~01ffc76279a8057a44" target="_blank" rel="noreferrer">
        <img src={upworkIcon} alt='upwork' loading='lazy' className='social-icon invert upwork' width="30" height='auto'/>
      </a>
      <a href="https://www.instagram.com/sp_kava/" target="_blank" rel="noreferrer">
        <img src={instaIcon} alt='instagram' loading='lazy' className='social-icon invert instagram' width="24" height='auto'/>
      </a>
      <a href="/Yury-Kastsen-CV.pdf" target="_blank" rel="noreferrer">
        <img src={cvIcon} alt='download cv' loading='lazy' className='social-icon invert cv' width="32" height='auto'/>
      </a>
      <a href="mailto:kastenedev@gmail.com" target="_blank" rel="noreferrer">
        <img src={mailIcon} alt='send mail' loading='lazy' className='social-icon invert mail' width="30" height='auto'/>
      </a>
    </div>
  </>
);

export default SocialIcons
