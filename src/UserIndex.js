import React, { Component } from 'react';
import User from './User';


class UserIndex extends Component {



	renderUsers = () => {
		console.log('user slices', this.props.slices)
		return this.props.slices.map((ps) => {
			return (
				<li>
				<User user={ps}/>
				</li>
		);
		})
	}




	render() {
		return (
			<div>
			<ul>
				{this.renderUsers()}
			</ul>
			</div>
		);
	}
}

export default UserIndex;
