import React from "react"
import { Link } from 'gatsby'
import './getStartedBtn.scss'

const GetStartedBtn = () => (
  <Link
    to="/requestForm/"
    state={{
      modal: true,
      noScroll: true
    }}
  >
    <button className='join-btn'>
      Get Started
    </button>
  </Link>
)

export default GetStartedBtn