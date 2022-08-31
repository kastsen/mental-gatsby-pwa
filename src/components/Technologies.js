import React from 'react';

import nodejsIcon from './../images/nodejs-ar21.svg'
import reactIcon from './../images/reactjs-ar21.svg'
import gatsbyLogo from './../images/Gatsby-Logo.svg'
import pixiJsLogo from './../images/logo-pixi-js.svg'
import tweenJsLogo from './../images/docs-icon-TweenJS.png'
import matterJsLogo from './../images/marrerjslogo.svg'

import SectionLayout from "./sectionLayout";

import './technologies.scss';

const featuresData = [
  {
    id: 'nodejs',
    title: 'Node JS',
    img: nodejsIcon
  },
  {
    id: '1reactJs',
    title: 'React JS',
    img: reactIcon
  },
  // {
  //   id: 'gatsbyJs',
  //   title: 'gatsby js',
  //   img: gatsbyLogo
  // },
  {
    id: 'pixiJs',
    title: 'PIXI JS',
    img: pixiJsLogo
  },
  {
    id: 'tweenJs',
    title: 'tween Js',
    img: tweenJsLogo
  },
  {
    id: 'matterJs',
    title: 'matter Js',
    img: matterJsLogo
  },
];

const createItems = (data) => {
  const items = data.map((item) => {
      return (
        <div key={item.id} className='item-flex'>
            <img src={item.img} alt={item.title} className='feature-icon' width="120"/>
        </div>
      )
    }
  );
  return items;
}

const Technologies = () =>
  <div id='technologies'>
    <SectionLayout name="technologies">
      <div className="row text-center technologiesList">
        {createItems(featuresData)}
      </div>
    </SectionLayout>
  </div>
;

export default Technologies;
