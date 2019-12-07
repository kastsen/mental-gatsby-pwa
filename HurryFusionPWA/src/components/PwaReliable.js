import React from "react"

import './pwaReliable.scss'

import pwaImg from './../images/magento-2-pwa-theme.png'
import pwaImg2 from './../images/what-is-a-pwa.png';
import pwaImg3 from './../images/5_graphic_PWA_rus.webp';

import SectionLayout from "./sectionLayout";

const PwaReliable =() => (
    <>
        <SectionLayout name="pwaReliable">
            <div className="col-lg-12 text-center">
                <h2>
                    Why build a Progressive Web App?
                </h2>
            </div>
            <div className="col-lg-6">
                <img src={pwaImg} alt=""/>
            </div>
            <div className="col-lg-6 row middle-xs">
                <div className="box">
                    <h3>PWA is one of the most talked about technology shifts in the web</h3>
                    <p>
                        If you are building for the web, PWA has incredible benefits, making it easy to delight your users, grow engagement and increase conversions.
                    </p>
                </div>
            </div>
            <div className="col-lg-6 row middle-xs">
                <div className="box">
                    <h3>Work reliably, no matter the network conditions</h3>
                    <p>
                        More than 40% of the users bounce from the websites that take more than 3 seconds to load.
                    </p>
                    <p>
                        PWA is a solution for this “Web Obesity Epidemic” faced by the users.
                    </p>
                </div>
            </div>
            <div className="col-lg-6">
                <img src={pwaImg2} alt=""/>
            </div>

            <div className="col-lg-6 text-center">
                <img src={pwaImg3} alt=""/>
            </div>
            <div className="col-lg-6 row middle-xs">
                <div className="box">
                    <h3>Why is it important?</h3>
                    <p>
                        PWA reduces the steps between discovery of an app and getting it on the home screen and thereby eliminates friction of getting an app installed.
                    </p>
                </div>
            </div>
        </SectionLayout>
    </>
);

export default PwaReliable