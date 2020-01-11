import { Link } from "gatsby"
import React from "react"
import { hideScroll } from './hideScroll'

const Nav =() => (
    <nav>
        <ul>
            <li>
                <Link to="#services">Services</Link>
            </li>
            <li>
                <Link to="#technologies">Stack</Link>
            </li>
            <li>
                <a href="https://kasten.hurryfusion.com/#portfolio">Showcase</a>
            </li>
            {/*<li>*/}
            {/*    <Link to="/">Blog</Link>*/}
            {/*</li>*/}
            <li>
                <a href="https://kasten.hurryfusion.com/#about">About</a>
            </li>
            <li>
                <Link
                  to="/requestForm/"
                  state={{
                      modal: true,
                      noScroll: true,
                  }}
                  onClick={hideScroll}
                >
                    Contact Us
                </Link>
            </li>
        </ul>
    </nav>
)

export default Nav