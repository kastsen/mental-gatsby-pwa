import React from 'react';

import './footer.scss'
import { Link } from "gatsby"

const Footer = () => {
    return (
      <footer>
        <ul className='textWhite'>
          <li>© {new Date().getFullYear()} <a href="/">YURY KASTSEN</a></li>
          <li><a href="/privacy-policy/">Privacy Policy</a></li>
          <li><a href="/#portfolio">Works</a></li>
          <li><Link to="/requestForm/">Contact</Link></li>
        </ul>
      </footer>
    )
  }
;

export default Footer;
