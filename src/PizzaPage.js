import React, { Component } from 'react';
import Nav from './Nav';
import PizzaDex from './PizzaDex';
import M from 'materialize-css'; //important for css
import NewPizza from './NewPizza';

class PizzaPage extends Component {
	state = {
		pizzas: [],
		newPizzas: []
	};

	componentDidMount() {
		fetch('http://localhost:3000/pizzas').then((res) => res.json()).then((data) =>
			this.setState({
				pizzas: data
			})
		);
	}
	render() {
		// console.log(this.state.pizzas);
		return (
			<div>
				<Nav />
				<NewPizza />
				<PizzaDex pizzas={this.state.pizzas} />
			</div>
		);
	}
}

export default PizzaPage;
