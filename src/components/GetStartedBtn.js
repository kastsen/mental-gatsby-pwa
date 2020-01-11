import React from "react"
import { Link } from 'gatsby'
import './getStartedBtn.scss'
import { hideScroll } from './hideScroll'

const GetStartedBtn = () => (
  <Link
    to="/requestForm/"
    state={{
      modal: true,
      noScroll: true,
    }}
  >
    <button className='join-btn' onClick={hideScroll}>
      Get Started
    </button>
  </Link>
)

export default GetStartedBtn