import React from "react"
import SectionLayout from "./sectionLayout";
import './topSection.scss'

const HeadSection =() => (
  <>
    <iframe src="/rescue.html" frameBorder="0" width="50%" height="auto" className="demoGame"></iframe>
    <SectionLayout name="topSection">
      <div className="background"></div>
      <h1>
        I'm Yury Kastsen<br></br>
        <span>JS</span> Developer
      </h1>
      <div className='description'>
        <p>
          High-performance tools, products, apps and games
        </p>
      </div>
    </SectionLayout>
  </>
);

export default HeadSection
