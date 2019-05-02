import React, { Component } from 'react';
import User from './User';


class UserIndex extends Component {



	renderUsers = () => {
		return this.props.users.map((user) => {
			return (
				<li>
				<User user={user}/>
				</li>
		);
		})
	}




	render() {
		console.log(this.userObject)
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
