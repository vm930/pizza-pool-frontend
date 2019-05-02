import React, { Component } from 'react';
import UserIndex from './UserIndex';

class Pizza extends Component {
	render() {
		return (
			<div>
				<div className="content">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdj2sMYwRV7t0kF9DKH6LrKDFeQdW1SNIZh3fUgwmH-1TcXu"
						alt="picture of a pizza"
					/>
					<span>Pizza:</span>
					<span>{this.props.pizza.name}</span>
				</div>
				<br />
				<div className="extra content">
					<span className="right floated">
						<i className="heart outline like icon" />
						Who's eating This bad boi:
					</span>
					<UserIndex slices={this.props.pizza.pizza_slices} />
					<i className="comment icon" />
					0 comments
				</div>
			</div>
		);
	}
}

export default Pizza;
