import React from 'react'

import nodejsIcon from './../images/nodejs-ar21.svg'
import reactIcon from './../images/reactjs-ar21.svg'
import pixiJsLogo from './../images/logo-pixi-js.svg'
import tweenJsLogo from './../images/docs-icon-TweenJS.png'
import matterJsLogo from './../images/marrerjslogo.svg'
import gatsbyLogo from './../images/Gatsby-Logo.svg'
import threejsLogo from './../images/threeJS.png'
import reduxLogo from './../images/redux-logo.png'

import SectionLayout from "./sectionLayout"

import '../scss/technologies.scss'

const featuresData = [
  {
    id: 'nodejs',
    title: 'Node JS',
    img: nodejsIcon,
    width: '90',
    height: '45'
  },
  {
    id: 'pixiJs',
    title: 'PIXI JS',
    img: pixiJsLogo,
    width: '95',
    height: '38'
  },
  {
    id: 'threejs',
    title: 'Three JS',
    img: threejsLogo,
    width: '90',
    height: '55'
  },
  {
    id: 'matterJs',
    title: 'matter Js',
    img: matterJsLogo,
    width: '100',
    height: '21'
  },
  {
    id: 'tweenJs',
    title: 'tween js',
    img: tweenJsLogo,
    width: '110',
    height: '23'
  },
  {
    id: 'redux',
    title: 'redux',
    img: reduxLogo,
    width: '90',
    height: '30'
  },
  {
    id: 'reactJs',
    title: 'React JS',
    img: reactIcon,
    width: '104',
    height: '55'
  },
  {
    id: 'gatsbyJs',
    title: 'gatsby js',
    img: gatsbyLogo,
    width: '95',
    height: '29'
  },
]

const createItems = (data) => {
  const items = data.map((item) => {
      return (
        <div key={item.id} className='item-flex'>
            <img src={item.img} loading='lazy' alt={item.title} className='feature-icon' width={item.width} height={item.height}/>
        </div>
      )
    }
  )
  return items
}

const Technologies = () =>
  <div id='technologies'>
    <SectionLayout name="technologies">
      <div className="row text-center technologiesList">
        {createItems(featuresData)}
      </div>
    </SectionLayout>
  </div>

export default Technologies;
