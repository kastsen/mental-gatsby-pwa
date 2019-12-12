import React from "react"
import { Link } from 'gatsby'
import './getStartedBtn.scss'

const hideScroll = () => {
  const page = document.querySelector('html')
  page.style.overflow = 'hidden';
}

const GetStartedBtn = () => (
  <Link
    to="/requestForm/"
    state={{
      modal: true,
      noScroll: true
    }}
  >
    <button className='join-btn' onClick={hideScroll}>
      Get Started
    </button>
  </Link>
)

export default GetStartedBtn