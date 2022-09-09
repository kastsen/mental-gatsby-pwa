import React from "react"

import SectionLayout from "./sectionLayout"

import kultprosvetImg from "../images/kultprosvet.jpg"
import kaptarunyImg from "../images/kaptaruny.jpg"
import nivelImg from "../images/nivel.jpg"
import bambooImg from "../images/bamboo.png"
import bvImg from "../images/bv.jpg"
import epImg from "../images/ep.png"
import houseraImg from "../images/housera-screen-black.png"
import glassImg from "../images/glass.jpg"
import icon from '../images/setting.png'

const PortfolioWebsites = () =>
  <SectionLayout name="portfolio bgBlack websites">
    <div className="text-center">
      <img src={icon} alt='websites' loading='lazy' className='projectIcon' width="40" height='40'/>
      <h3 className='text-center'>Websites & Apps</h3>
    </div>
    <p className='reference text-center'>
      A website works the way you want it to because<br/>
      the front and back ends of a website are always communicating.
    </p>
    <div className="row projects websites active">
      <div className="col-lg-4">
        <img src={kultprosvetImg} loading='lazy' alt='kultprosvet' className='projectScreen' width="300" height='187'/>
      </div>
      <div className="col-lg-4">
        <img src={kaptarunyImg} loading='lazy' alt='kaptaruny' className='projectScreen' width="300" height='187'/>
      </div>
      <div className="col-lg-4">
        <img src={bambooImg} loading='lazy' alt='bamboo' className='projectScreen' width="300" height='187'/>
      </div>
      <div className="col-lg-4">
        <img src={nivelImg} loading='lazy' alt='nivel' className='projectScreen' width="300" height='187'/>
      </div>
    </div>
    <div className="row projects websites active websites-2">
      <div className="col-lg-4">
        <img src={bvImg} loading='lazy' alt='beauty village' className='projectScreen' width="300" height='187'/>
      </div>
      <div className="col-lg-4">
        <img src={epImg} loading='lazy' alt='easy projects' className='projectScreen' width="300" height='187'/>
      </div>
      <div className="col-lg-4">
        <img src={houseraImg} loading='lazy' alt='housera' className='projectScreen' width="300" height='187'/>
      </div>
      <div className="col-lg-4">
        <img src={glassImg} loading='lazy' alt='glass factory NY' className='projectScreen' width="300" height='187'/>
      </div>
    </div>
  </SectionLayout>

export default PortfolioWebsites;
