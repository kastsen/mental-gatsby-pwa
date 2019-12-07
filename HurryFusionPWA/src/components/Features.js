import React from 'react';

import conceptIcon from './../images/002-rocket-ship.svg';
import developmentIcon from './../images/004-astronaut.svg';
import transformationIcon from './../images/001-solar-system.svg';

import './features.scss'

const featuresData = [
    {
        id: 'conceptAndStrategy',
        name: 'Concept',
        descr: 'Developing an effective strategy for your projects',
        img: conceptIcon
    },
    {
        id: 'enterpriseDev',
        name: 'Development',
        descr: 'Powerful software to solve complex business problems',
        img: developmentIcon
    },
    {
        id: 'transformationServices',
        name: 'Transformation',
        descr: 'Digitization guarantees various benefits to organization',
        img: transformationIcon
    },
];

const featuresItems = featuresData.map((feature) => {

        return (
            <div className="col-lg-4" key={feature.id}>

                <div className="item">
                    <img src={feature.img} alt={feature.name} className='feature-icon'/>
                    <h3>{feature.name}</h3>
                    <p>{feature.descr}</p>
                </div>

            </div>
        )
    }

);

const Features = () =>
    <section className='features text-center'>
        <div className="container">
            <div className="content">
                <div className="row">
                    <h2 className='text-center'>
                        {/*We provide custom*/}
                        {/*software development services*/}
                        Perfect for every kind of business
                    </h2>
                </div>
                <div className="row">
                        {featuresItems}
                </div>
            </div>
        </div>
    </section>
;

export default Features;
