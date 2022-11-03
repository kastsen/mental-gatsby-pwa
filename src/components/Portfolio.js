import React from 'react'

import '../scss/portfolio.scss'

import SectionLayout from './sectionLayout'
import PortfolioGames from "./PortfolioGames"
import PortfolioApps from './PortfolioApps'

const Portfolio = ({ title}) =>
    <>
        <SectionLayout name="portfolio bgBlack">

            <div className='text-center'>
                <h2 id='portfolio'>{title}</h2>
                <p className='subtitle'>
                    From interaction design to scalable design systems, single-page apps to something more experimental with WebGL. For clients around the globe. <br/>A selection of recent projects I have worked on.
                </p>
            </div>

            <PortfolioGames/>

        </SectionLayout>

        <PortfolioApps/>
    </>

export default Portfolio
