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
		console.log(e.target.value);
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		console.log('this handle submit');
	};

	render() {
		return (
			<div>
				<form className="container" onChange={this.handleChange} onSubmit={this.handleFormSubmit}>
					<label>
						Pizza Name: <input name="pizzaName" defaultValue="" type="text" />
					</label>
					<label>
						How Many Slices: <input name="wantedSlices" defaultValue="" type="text" />
					</label>
					<label>
						Vegan?: <input name="vegan" type="checkbox" checked="yes" />
					</label>
					<label>
						Give It A Price: <input name="price" defaultValue="" type="text" />
					</label>
					<label>
						This Pizza Belongs to: <input name="userName" defaultValue="" type="text" />
					</label>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default NewPizza;
