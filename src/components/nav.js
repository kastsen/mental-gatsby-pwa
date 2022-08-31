import { Link } from "gatsby"
import React from "react"

const Nav =() => (
    <nav>
        <ul>
            {/*<li><Link to="/">Home</Link></li>*/}
            <li><a href="#technologies">Technologies</a></li>
            <li><Link to="#services">Features</Link></li>
          {/*<li><a href="/blog/">Blog</a></li>*/}
            <li className={'contactUs'}><Link to="/requestForm/">Contact</Link></li>
        </ul>
    </nav>
)

export default Nav
