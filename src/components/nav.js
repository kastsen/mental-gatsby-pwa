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
                <a href="https://kasten.hurryfusion.com/#portfolio">Showcase</a>
            </li>
            <li>
                <a href="https://kasten.hurryfusion.com/#about">About</a>
            </li>
            <li className={'contact-us'}>
                <Link
                  to="/requestForm/"
                  state={{
                      modal: true,
                      noScroll: true,
                  }}
                  onClick={hideScroll}
                >
                    Contact us
                </Link>
            </li>
        </ul>
    </nav>
)

export default Nav