import React from "react"
import { Link } from 'gatsby'
import '../scss/getStartedBtn.scss'

const GetStartedBtn = () => (
  <Link to="/requestForm/">
    <button className='join-btn'>Hire Me</button>
  </Link>
)

export default GetStartedBtn
