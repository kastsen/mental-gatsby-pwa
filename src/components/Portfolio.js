import React from 'react';
import './portfolio.scss'
import SectionLayout from './sectionLayout';
import kultprosvetImg from '../images/kultprosvet.jpg'
import nivelImg from '../images/nivel.jpg'
import kaptarunyImg from '../images/kaptaruny.jpg'

const Portfolio = ({ title}) =>
    <SectionLayout name="portfolio bgBlack">
        <div className='text-center'>
          <h2 id='portfolio'>{title}</h2>
          <p className='subtitle'>
            My highest priority: working for clients around the globe.
          </p>
        </div>
        <h3 className='text-center'>Playable Ads</h3>
        <p className='reference text-center'>
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
        <div className="row projects websites">
            <div className="col-lg-4">
              <img src={kultprosvetImg} alt='kultprosvet' className='projectScreen' width="100%" height='auto'/>
            </div>
          <div className="col-lg-4">
            <img src={kaptarunyImg} alt='kaptaruny' className='projectScreen' width="100%" height='auto'/>
          </div>
          <div className="col-lg-4">
            <img src={nivelImg} alt='nivel' className='projectScreen' width="100%" height='auto'/>
          </div>
        </div>
    </SectionLayout>
;

export default Portfolio;
