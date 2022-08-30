import React from "react"
import SectionLayout from "./sectionLayout";
import './topSection.scss'
import '../scss/socialIcons.scss'
import GetStartedBtn from "./GetStartedBtn"
import gitIcon from './../images/github.png'
import linkedinIcon from './../images/linkedin.png'

const HeadSection =() => (
  <>
    <iframe src="/rescue.html" frameBorder="0" width="50%" height="auto" className="demoGame"></iframe>
    <SectionLayout name="topSection">
      <div className="background"></div>
      <h1>
        Mental Dev.
      </h1>
      <div className='description'>
        <p>
          High-performance tools, products, apps and games
        </p>
      </div>
      <GetStartedBtn/>
      <div className="socialIcons">
        <a href="https://github.com/kastsen" target="_blank">
          <img src={gitIcon} alt='git' className='social-icon invert' width="32" height='auto'/>
        </a>
        <a href="https://www.linkedin.com/in/kastsen/" target="_blank">
          <img src={linkedinIcon} alt='linkedin' className='social-icon invert linkedin' width="30" height='auto'/>
        </a>
      </div>
    </SectionLayout>
  </>
);

export default HeadSection
