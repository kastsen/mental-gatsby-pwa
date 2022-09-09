import React from 'react'

import '../scss/features.scss'

import SectionLayout from './sectionLayout'
import { IconsItems } from './IconsItems'

const Features = ({ title, data }) =>
    <SectionLayout name="features text-center bgBlack">
        <h2 id='services'>{title}</h2>
        <div className="row">
            {IconsItems(data, 'col-lg-4')}
        </div>
    </SectionLayout>

export default Features
