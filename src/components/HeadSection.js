import React from "react"
import SectionLayout from "./sectionLayout";
import './topSection.scss'

const HeadSection =() => (
    <SectionLayout name="topSection">
      <div className="background"></div>
        <h1>
          Kastenedev
        </h1>
      <div className='description'>
        <p>
          Artist & digital nomad. JavaScript developer & speaker who builds delightful, high-performance tools, products, and games.
        </p>
      </div>
    </SectionLayout>
);

export default HeadSection
