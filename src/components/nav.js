import { Link } from "gatsby"
import React from "react"

const Nav =() => (
    <nav>
        <ul>
            <li>
                <Link to="#services">Services</Link>
            </li>
            <li>
                <Link to="#technologies">Technologies</Link>
            </li>
            {/*<li>*/}
            {/*    <Link to="/">Showcase</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to="/">Blog</Link>*/}
            {/*</li>*/}
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact Us</Link>
            </li>
        </ul>
    </nav>
)

export default Nav