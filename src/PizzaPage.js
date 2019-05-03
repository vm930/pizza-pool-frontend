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

	addPizza = (newPizza) => {
		fetch('http://localhost:3000/pizzas', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newPizza)
		})
			.then((res) => res.json())
			.then((response) =>
				this.setState({
					pizzas: [ ...this.state.pizzas, response ]
				})
			);
	};

	getPizza = (pizzaClicked) => {
		console.log(pizzaClicked, this.props.currentUser);

		//update the pizzaslices
		const foundPizza = this.state.pizzas.find((pizza) => pizza.id === pizzaClicked.id);

		// console.log(foundPizza.pizza_slices[foundPizza.pizza_slices.length]);

		// id: 11;
		// name: 'White';
		// pizza_slices: [ { slices: 1, user_name: 'Naomi' } ];
		// price: 10;
		// vegan: false;

		const newPizzas = this.state.pizzas.map((pizza) => {
			// const objIndex = projects.findIndex(obj => obj.value === 'jquery-ui');
			if (pizza.id === foundPizza.id) {
				const pizzaIndex = pizza.pizza_slices.findIndex(
					(slice) => slice.user_name === this.props.currentUser.name
				);
				const newSlices = [ ...pizza.pizza_slices ];
				if (pizzaIndex > -1) {
					const replaceSlice = { ...newSlices[pizzaIndex], slices: newSlices[pizzaIndex].slices + 1 };

					newSlices[pizzaIndex] = replaceSlice;

					return { ...pizza, pizza_slices: newSlices };
					// } else {
					// fetch("")
					// .then
					// const newObj = {}
					// return
					// (foundPizza[foundPizza.length] = {
					// 	slices: 1,
					// 	user_name: this.props.currentUser
					// });
				}
			} else {
				return pizza;
			}
		});

		console.log(newPizzas);

		this.setState({
			pizzas: newPizzas
		});

		// 0: { slices: 1, user_name: "Naomi" }
		// 1: { slices: 1, user_name: "Matt" }

		//update the backend

		// fetch('http://localhost:3000/pizzas', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(pizzaClicked)
		// })
		// 	.then((res) => res.json())
		// 	.then((response) =>
		// 		this.setState({
		// 			pizzas: [ ...this.state.pizzas, response ]
		// 		})
		// 	);
	};

	render() {
		console.log(this.state.pizzas);

		return (
			<div>
				<Nav />
				<NewPizza addPizza={this.addPizza} />
				<PizzaDex pizzas={this.state.pizzas} getPizza={this.getPizza} currentUser={this.props.currentUser} />
			</div>
		);
	}
}

export default PizzaPage;
