import React from 'react';

import './footer.scss'

const Footer = () => {
    return (
      <footer>
        <ul className='textWhite'>
          <li>© {new Date().getFullYear()} HurryFusion. All rights reserved</li>
          <li><a href="/privacy-policy/">Privacy Policy</a></li>
        </ul>
      </footer>
    )
  }
;

export default Footer;
