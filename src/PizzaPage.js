import React, { Component } from 'react';
import Nav from './Nav';
import PizzaDex from './PizzaDex';
import M from 'materialize-css'; //important for css
import NewPizza from './NewPizza';
import { Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class PizzaPage extends Component {
	constructor(){
		super()
		this.state = {
			pizzas: [],
			newPizzas: [],
			modalIsOpen: false
	};

	this.openModal = this.openModal.bind(this);
	this.afterOpenModal = this.afterOpenModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
}


	componentDidMount() {
		fetch('http://localhost:3000/pizzas').then((res) => res.json()).then((data) =>
			this.setState({
				pizzas: data
			})
		);
	}

	openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("in modal")
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
		//update the pizzaslices
		const foundPizza = this.state.pizzas.find((pizza) => pizza.id === pizzaClicked.id);

		const newPizzas = this.state.pizzas.map((pizza) => {
			// const objIndex = projects.findIndex(obj => obj.value === 'jquery-ui');
			if (pizza.id === foundPizza.id) {
				const pizzaIndex = pizza.pizza_slices.findIndex(
					(slice) => slice.user_name === this.props.currentUser.name
				);
				const newSlices = [ ...pizza.pizza_slices ];
				if (pizzaIndex > -1) {
					fetch(`http://localhost:3000/pizza_slices/${newSlices[pizzaIndex].id}`, {
						method: 'PATCH',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							name: foundPizza.Name,
							price: foundPizza.price,
							vegan: foundPizza.vegan,
							pizza_slices: {
								slices: newSlices[pizzaIndex].slices + 1,
								user_name: this.props.currentUser.name
							}
						})
					});
					const replaceSlice = { ...newSlices[pizzaIndex], slices: newSlices[pizzaIndex].slices + 1 };

					newSlices[pizzaIndex] = replaceSlice;

					return { ...pizza, pizza_slices: newSlices };
				} else {
					const newPizzaSlice = fetch('http://localhost:3000/pizza_slices', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							user_id: this.props.currentUser.id,
							pizza_id: pizzaClicked.id
						})
					});
					newSlices.push({ slices: 1, user_name: this.props.currentUser.name });
					console.log('pizzaslices', newSlices);

					return { ...pizza, pizza_slices: newSlices };
				}
			} else {
				return pizza;
			}
		});

		this.setState({
			pizzas: newPizzas
		});
	};

	render() {
		return (
			<div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
				<NewPizza addPizza={this.addPizza} />
			</Modal>
				<Nav openModal={this.openModal}/>
				<Switch>
					<Route
						path="/"
						render={() => (
							<PizzaDex
								pizzas={this.state.pizzas}
								getPizza={this.getPizza}
								currentUser={this.props.currentUser}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default PizzaPage;
