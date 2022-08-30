import { Link } from "gatsby"
import React from "react"

const Nav =() => (
    <nav>
        <ul>
            <li><a href="#technologies">Technologies</a></li>
            <li><Link to="#services">Features</Link></li>
            <li className={'contactUs'}><Link to="/requestForm/">Contact</Link></li>
        </ul>
    </nav>
)

export default Nav
