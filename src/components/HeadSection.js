import React from "react"
import SectionLayout from "./sectionLayout";
import './topSection.scss'
import GetStartedBtn from "./GetStartedBtn"
import SocialIcons from "./SocialIcons"

const HeadSection =() => (
  <>


    <SectionLayout name="topSection">

      <div className="background"></div>
      <h1>Yury Kastsen</h1>
      <div className='description'>
        <p>Developer & Speaker who builds high-performance tools, products, apps and games.</p>
      </div>

      <GetStartedBtn/>
      <SocialIcons/>

    </SectionLayout>

    <iframe src="/rescue.html" frameBorder="0" width="50%" height="auto" className="demoGame"></iframe>
  </>
);

export default HeadSection
