import React from 'react'

import '../scss/portfolio.scss'

import SectionLayout from './sectionLayout'
import PortfolioPlayableAds from "./PortfolioPlayableAds"

const Portfolio = ({ title}) =>
    <SectionLayout name="portfolio bgBlack">

        <div className='text-center'>
          <h2 id='portfolio'>{title}</h2>
          <p className='subtitle'>
            From interaction design to scaleable design systems, single-page apps to something more experimental with WebGL. <strong>My highest priority:</strong> working for clients around the globe.
          </p>
        </div>

        <PortfolioPlayableAds/>

    </SectionLayout>

export default Portfolio
