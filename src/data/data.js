import conceptIcon from './../images/astronaut.svg';
import developmentIcon from './../images/rocket-ship.svg';
import transformationIcon from './../images/solar-system.svg';
import React from "react"

export const data = {
  headSection: {
    title: 'Progressive technologies for your business',
    description: 'Progressive Web Apps helps to improve conversions by increasing ' +
                 'potential reach with low acquisition costs.'
  },
  features: [
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
  ]
};
