import React, { Component } from 'react';

class LogIn extends Component {
	state = {
		user: ''
	};

	handleChange = (e) => {
		this.setState({
			user: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.getUser(this.state.user);
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<h3>welcome to PizzaPool</h3>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} type="text" value={this.state.user} />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default LogIn;
