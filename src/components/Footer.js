import React from 'react';

import './footer.scss'

const Footer = () => {
    return (
      <footer>
        <ul className='textWhite'>
          <li>© {new Date().getFullYear()} Hurry Fusion. All rights reserved</li>
          <li> |</li>
          <li><a href="/privacy-policy/">Privacy Policy</a></li>
          <li><a href="/">Term of Service</a></li>
        </ul>
      </footer>
    )
  }
;

export default Footer;
