import React, { Component } from 'react';
import Pizza from './pizza';
import { Link } from 'react-router-dom';

class PizzaDex extends Component {
	render() {
		return (
			<div className="pizzaIndex">
				{this.props.pizzas.map((pizza) => {
					return <Pizza pizza={pizza} getPizza={this.props.getPizza} currentUser={this.props.currentUser} />;
				})}
			</div>
		);
	}
}

export default PizzaDex;
