import { Link } from "gatsby"
import React from "react"

import '../scss/header.scss'
import '../scss/headerNav.scss'

import Nav from "./nav"

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
