import React, { Component } from 'react';
import Pizza from './pizza';

class PizzaDex extends Component {
	render() {
		return (
			<div className="container" className="col s12 m12">
				{this.props.pizzas.map((pizza) => {
					return <Pizza pizza={pizza} getPizza={this.props.getPizza} currentUser={this.props.currentUser} />;
				})}
			</div>
		);
	}
}

export default PizzaDex;
