import React from "react";

import { Link } from "gatsby";

const Nav =() => (
	<nav>
		<ul>
			<li><Link to="/#portfolio">Works</Link></li>
			<li><a href="/#technologies">Technologies</a></li>
			<li className={'contactUs'}><Link to="/requestForm/">Contact</Link></li>
		</ul>
	</nav>
);

export default Nav;

