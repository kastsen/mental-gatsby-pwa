import React from "react"
import SectionLayout from "./sectionLayout";

import './topSection.scss'

const TopSection =() => (
    <SectionLayout name="topSection">
        <div className="box">
            <h1>
                Progressive technologies <br/>
                for your business
            </h1>
            <p>
                Progressive Web Apps helps to improve conversions by increasing<br/>
                potential reach with low acquisition costs.
            </p>
            <button className='join-btn'>
                Join Now
            </button>
        </div>
    </SectionLayout>
);

export default TopSection