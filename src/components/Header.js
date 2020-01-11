import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss'
import './headerNav.scss'

import Nav from "./nav"
import GetStartedBtn from "./GetStartedBtn"

const Header = ({ siteTitle }) => (
    <header>
        <div className='container'
            style={{
                display: `flex`,
                alignItems: `center`
            }}
        >
            <div className='logo'>
                <Link
                    to="/"
                >
                    {siteTitle}
                </Link>
            </div>
            <Nav/>
            <GetStartedBtn/>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header
