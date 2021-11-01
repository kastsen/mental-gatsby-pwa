import React from "react"
import SectionLayout from "./sectionLayout";

import './topSection.scss'
import GetStartedBtn from "./GetStartedBtn"

const HeadSection =() => (
    <SectionLayout name="topSection">
        <h1>
            Use technologies <br/>
            for business
        </h1>
        <p>
          Progressive apps help increase conversions and royalties.
        </p>
        <GetStartedBtn/>
    </SectionLayout>
);

export default HeadSection