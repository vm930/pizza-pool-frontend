import React, { Component } from 'react';
import Pizza from './Pizza';

class PizzaDex extends Component {
	render() {
		return (
			<div>
				{this.props.pizzas.map((pizza) => {
					return <Pizza pizza={pizza} />;
				})}
			</div>
		);
	}
}

export default PizzaDex;
