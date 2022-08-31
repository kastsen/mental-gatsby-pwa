import SectionLayout from "./sectionLayout"
import kultprosvetImg from "../images/kultprosvet.jpg"
import kaptarunyImg from "../images/kaptaruny.jpg"
import nivelImg from "../images/nivel.jpg"
import bambooImg from "../images/bamboo.png"
import bvImg from "../images/bv.jpg"
import epImg from "../images/ep.png"
import houseraImg from "../images/housera-screen-black.png"
import glassImg from "../images/glass.jpg"
import React from "react"

const PortfolioWebsites = () =>
  <SectionLayout name="portfolio bgBlack websites">
    <h3 className='text-center'>Websites</h3>
    <p className='reference text-center'>
      A website works the way you want it to because<br/>
      the front and back ends of a website are always communicating.
    </p>
    <div className="row projects websites active">
      <div className="col-lg-4">
        <img src={kultprosvetImg} alt='kultprosvet' className='projectScreen' width="100%" height='auto'/>
      </div>
      <div className="col-lg-4">
        <img src={kaptarunyImg} alt='kaptaruny' className='projectScreen' width="100%" height='auto'/>
      </div>
      <div className="col-lg-4">
        <img src={bambooImg} alt='bamboo' className='projectScreen' width="100%" height='auto'/>
      </div>
      <div className="col-lg-4">
        <img src={nivelImg} alt='nivel' className='projectScreen' width="100%" height='auto'/>
      </div>
    </div>
    <div className="row projects websites active websites-2">
      <div className="col-lg-4">
        <img src={bvImg} alt='beauty village' className='projectScreen' width="100%" height='auto'/>
      </div>
      <div className="col-lg-4">
        <img src={epImg} alt='easy projects' className='projectScreen' width="100%" height='auto'/>
      </div>
      <div className="col-lg-4">
        <img src={houseraImg} alt='housera' className='projectScreen' width="100%" height='auto'/>
      </div>

      <div className="col-lg-4">
        <img src={glassImg} alt='glass factory NY' className='projectScreen' width="100%" height='auto'/>
      </div>
    </div>
  </SectionLayout>
;

export default PortfolioWebsites;
