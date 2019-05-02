import React, { Component } from 'react';

class User extends Component {
	render() {
		return (
			<div>
				{this.props.users.map((user) => {
					return <h4>{user.name}</h4>;
				})}
			</div>
		);
	}
}

export default User;
