import React from 'react';
import './features.scss'
import SectionLayout from './sectionLayout';
const Features = ({ title, data }) =>
    <SectionLayout name="features text-center bgBlack">
        <h2 id='services'>{title}</h2>
        <div className="row">
            <div className="col-lg-4">

            </div>
        </div>
    </SectionLayout>
;

export default Features;
