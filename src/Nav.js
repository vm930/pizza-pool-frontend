import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class Nav extends Component {
	//import this for Materialized UI
	constructor() {
		super();
		this.M = window.M;
	}
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<img
							className="logo"
							src="http://pngriver.com/wp-content/uploads/2018/04/Download-Pizza-Slice.png"
							alt="pizzaLogo"
						/>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<a href="sass.html">Sass</a>
							</li>
							<li>
								<a href="badges.html">Components</a>
							</li>
							<li>
								<a href="collapsible.html">JavaScript</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Nav;
