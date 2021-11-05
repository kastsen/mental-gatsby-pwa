import { Link } from "gatsby"
import React from "react"
import { hideScroll } from './hideScroll'

const Nav =() => (
    <nav>
        <ul>
            <li><Link to="#services">Services</Link></li>
            <li><a href="/pricing/">Pricing</a></li>
          <li><a href="/blog/">Blog</a></li>
            <li className={'contactUs'}>
                <Link
                  to="/requestForm/"
                  state={{
                      modal: true,
                      noScroll: true,
                  }} onClick={hideScroll}>Contact</Link>
            </li>
        </ul>
    </nav>
)

export default Nav
