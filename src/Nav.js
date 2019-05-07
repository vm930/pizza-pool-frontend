import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
	//import this for Materialized UI
	constructor() {
		super();
		this.M = window.M;
	}

	handleClick = () => {
		this.props.openModal();
	};
	render() {
		console.log(this.props);
		return (
			<div>
				<nav>
					<div className="nav-wrapper deep-orange">
						<img
							className="logo"
							src="http://pngriver.com/wp-content/uploads/2018/04/Download-Pizza-Slice.png"
							alt="pizzaLogo"
						/>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<Link to="/login">Log In</Link>
							</li>
							<li>
								<a onClick={this.handleClick}>Make New Slice</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Nav;
