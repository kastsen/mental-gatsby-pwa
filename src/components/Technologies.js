import React from 'react';

import nodejsIcon from './../images/nodejs.svg'
import reactIcon from './../images/react-icon.svg'
import gatsbyIcon from './../images/gatsby.svg'
import eslintIcon from './../images/eslint.svg'
import graphqlIcon from './../images/graph-ql-logo.svg'

import SectionLayout from "./sectionLayout";

import './technologies.scss';

const featuresData = [
  {
    id: 'nodejs',
    title: 'Node JS',
    img: nodejsIcon
  },
  {
    id: 'eslint',
    title: 'ESLint',
    img: eslintIcon
  },
  {
    id: '1reactJs',
    title: 'React JS',
    img: reactIcon
  },
  {
    id: 'graphql',
    title: 'GraphQL',
    img: graphqlIcon
  },
  {
    id: 'gatsby',
    title: 'Gatsby JS',
    img: gatsbyIcon
  },
];

const createItems = (data) => {
  const items = data.map((item) => {
      return (
        <div key={item.id} className='item-flex'>
            <img src={item.img} alt={item.name} className='feature-icon'/>
            <h3>{item.title}</h3>
        </div>
      )
    }
  );
  return items;
}

const Technologies = () =>
  <SectionLayout name="technologies bgGray">
    <h2 id='technologies'>
     Technology Stack
    </h2>
    <div className="row text-center">
      {createItems(featuresData)}
    </div>
  </SectionLayout>
;

export default Technologies;
