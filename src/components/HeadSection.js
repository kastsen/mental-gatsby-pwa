import React from "react"
import SectionLayout from "./sectionLayout";

import './topSection.scss'
import GetStartedBtn from "./GetStartedBtn"

const HeadSection =() => (
    <SectionLayout name="topSection">
        <h1>
            Progressive technologies <br/>
            for <span>your</span> business
        </h1>
        <p>
            Progressive Web Apps helps to improve conversions by increasing<br/>
            potential reach with low acquisition costs.
        </p>
        <GetStartedBtn/>
    </SectionLayout>
);

export default HeadSection