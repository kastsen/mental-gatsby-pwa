import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss'

import Nav from "./nav"

const Header = ({ siteTitle }) => (
    <header>
        <div className='container'
            style={{
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
                padding: `20px 0`
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
            <button className='join-btn'>
                Join Now
            </button>
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
