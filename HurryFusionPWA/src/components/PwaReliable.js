import React from "react"

import './pwaReliable.scss'

import pwaImg from './../images/pwa.png'
import SectionLayout from "./sectionLayout";

const PwaReliable =() => (
    <SectionLayout name="pwaReliable">
        <div className="col-lg-6">
            <img src={pwaImg} alt=""/>
        </div>
        <div className="col-lg-6 row middle-xs">
            <div className="box">
                <h2>
                    Why build a Progressive Web App?
                </h2>
                <p>
                    PWA is one of the most talked about technology shifts in the web.
                </p>
                <p>
                    If you are building for the web, PWA has incredible benefits, making it easy to delight your users, grow engagement and increase conversions.
                </p>
            </div>
        </div>
    </SectionLayout>
);

export default PwaReliable