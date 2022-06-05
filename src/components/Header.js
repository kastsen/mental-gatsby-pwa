import { Link } from "gatsby"
import React from "react"

import './header.scss'
import './headerNav.scss'

import Nav from "./nav"
// import GetStartedBtn from "./GetStartedBtn"

const Header = () => (
    <header>
        <div className='container'
            style={{
                display: `flex`,
                alignItems: `center`
            }}
        >
            <div className='logo'>
                <Link to="/"></Link>
            </div>
            <Nav/>
            {/*<GetStartedBtn/>*/}
        </div>
    </header>
);

export default Header
