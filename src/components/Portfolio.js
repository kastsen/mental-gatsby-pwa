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
                    I see that the world can change, so I always try to link my work and hobbies with progressive projects. For clients around the globe. <br/>A selection of recent projects I have worked on.
                </p>
            </div>

            <PortfolioGames/>

        </SectionLayout>

        <PortfolioApps/>
    </>

export default Portfolio
