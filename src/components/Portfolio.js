import React from 'react';
import './portfolio.scss'
import SectionLayout from './sectionLayout';

const Portfolio = ({ title}) =>
    <SectionLayout name="portfolio bgBlack">
        <div className='text-center'>
          <h2 id='portfolio'>{title}</h2>
          <p className='subtitle'>
            <strong>My highest priority:</strong> working for clients around the globe.
          </p>
        </div>

        <h3 className='text-center'>
          Playable Ads
        </h3>

        <p className='reference text-center'>
            Playable ads are an interactive video game ad.<br/>
            Art & concept by <a href="https://vizor-games.com/" target='_blank'>
            Vizor Games
          </a>
        </p>

      <div className="row projects playableAds active">
          <div className="playable">
            <iframe src="/p979.html" frameBorder="0" width="100%" height="auto"></iframe>
          </div>
          <div className="playable">
            <iframe src="/p1825.html" frameBorder="0" width="100%" height="auto"></iframe>
          </div>
          <div className="playable">
            <iframe src="/p1664.html" frameBorder="0" width="100%" height="auto"></iframe>
          </div>
        </div>

    </SectionLayout>
;

export default Portfolio;
