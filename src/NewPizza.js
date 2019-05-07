import React, { Component } from 'react';

class NewPizza extends Component {
	state = {
		userName: '',
		pizzaName: '',
		wantedSlices: 1,
		vegan: false,
		price: 0
	};

	handleChange = (e) => {
		// console.log(e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleCheck = (e) => {
		// console.log(e.target.value);
		this.setState({
			vegan: !this.state.vegan
		});
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		const newPizza = {
			name: this.state.pizzaName,
			price: this.state.price,
			vegan: this.state.vegan,
			pizza_slices: {
				slices: this.state.wantedSlices,
				user_name: this.state.userName
			}
		};
		this.props.addPizza(newPizza);

		this.setState({
			userName: '',
			pizzaName: '',
			wantedSlices: 1,
			vegan: false,
			price: 0
		});

		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<form className="container" onSubmit={this.handleFormSubmit}>
					<img className="pizzaSignIn" src="https://pbs.twimg.com/media/C3mkPs0WQAA-Ekh.jpg" />
					<br />
					<label>
						Pizza Name:{' '}
						<input name="pizzaName" type="text" value={this.state.pizzaName} onChange={this.handleChange} />
					</label>
					<label>
						How Many Slices:{' '}
						<input
							name="wantedSlices"
							type="text"
							value={this.state.wantedSlices}
							onChange={this.handleChange}
						/>
					</label>

					<label>
						<input
							type="checkbox"
							id="indeterminate-checkbox"
							value={this.state.vegan}
							onChange={this.handleCheck}
						/>
						<span>Vegan?</span>
					</label>
					<br />
					<label>
						Give It A Price:{' '}
						<input name="price" type="text" value={this.state.price} onChange={this.handleChange} />
					</label>
					<label>
						This Pizza Belongs to:{' '}
						<input name="userName" type="text" value={this.state.userName} onChange={this.handleChange} />
					</label>

					<input type="submit" class="btn waves-effect waves-light deep-orange " value="Submit" />
				</form>
			</div>
		);
	}
}

export default NewPizza;
