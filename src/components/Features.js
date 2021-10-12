import React from 'react';

import conceptIcon from './../images/astronaut.svg';
import developmentIcon from './../images/rocket-ship.svg';
import transformationIcon from './../images/solar-system.svg';

import './features.scss'
import SectionLayout from './sectionLayout';
// import { createItems } from './createItems';

const featuresData = [
    {
        id: 'conceptAndStrategy',
        name: 'Easy for users',
        descr: 'It is one of the most talked about technology shifts in the web.',
        img: conceptIcon
    },
    {
        id: 'solutionDev',
        name: 'Fast Development',
        descr: 'If you are building for the web, PWA has incredible benefits.',
        img: developmentIcon
    },

    {
        id: 'transformationServices',
        name: 'Transformation',
        descr: 'Progressive Web Apps now work on all desktop platforms.',
        img: transformationIcon
    },
];

const Features = () =>
    <SectionLayout name="features text-center bgBlack">
        <h2 id='services'>
          Why build a Progressive App?
        </h2>
        <div className="row">
            {/*{createItems(featuresData, 'col-lg-4')}*/}
        </div>
    </SectionLayout>
;

export default Features;
