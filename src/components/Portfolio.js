import React from 'react';
import './portfolio.scss'
import SectionLayout from './sectionLayout';
import kultprosvetImg from '../images/kultprosvet.jpg'
import nivelImg from '../images/nivel.jpg'
import kaptarunyImg from '../images/kaptaruny.jpg'

const Portfolio = ({ title}) =>
    <SectionLayout name="features bgBlack">
        <div className='text-center'>
          <h2 id='services'>{title}</h2>
          <p className='subtitle'>
            My highest priority: working for clients around the globe
          </p>
        </div>
        <ul>
          <li>
            Playable Ads
          </li>
          <li>
            Websites
          </li>
          <li>
            Creatives
          </li>
        </ul>
        <div className="row">
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
