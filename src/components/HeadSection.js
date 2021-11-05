import React from "react"
import SectionLayout from "./sectionLayout";

import './topSection.scss'
import GetStartedBtn from "./GetStartedBtn"

const HeadSection =() => (
    <SectionLayout name="topSection">
        <h1>
            Use technologies <br/>
            for business.
        </h1>
        <p>
          We will transform your business to digital. <br/>
          Progressive apps help increase conversions.
        </p>
        <GetStartedBtn/>
    </SectionLayout>
);

export default HeadSection