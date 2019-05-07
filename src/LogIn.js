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
			<div id="loginPage" className="container">
				<h3>Welcome to PizzaPool</h3>
				<img
					className="pizzaLogin"
					src="http://pngriver.com/wp-content/uploads/2018/04/Download-Pizza-PNG-Picture.png"
				/>
				<form onSubmit={this.handleSubmit}>
					<input
						className="input-field"
						placeholder="Your Name"
						onChange={this.handleChange}
						type="text"
						value={this.state.user}
					/>
					<input className="input-field" type="submit" class="btn waves-effect waves-light deep-orange " />
				</form>
			</div>
		);
	}
}

export default LogIn;
