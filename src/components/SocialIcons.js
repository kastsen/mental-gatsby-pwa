import gitIcon from "../images/github.png"
import linkedinIcon from "../images/linkedin.png"
import upworkIcon from "../images/upwork.svg"
import cvIcon from "../images/cv.png"
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
      <a href="/Yury-Kastsen-CV-31-08-2022.pdf" target="_blank" rel="noreferrer">
        <img src={cvIcon} alt='download cv' loading='lazy' className='social-icon invert cv' width="32" height='auto'/>
      </a>
    </div>
  </>
);

export default SocialIcons
