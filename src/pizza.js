import React, { Component } from 'react';
import UserIndex from './UserIndex';
import Timer from './Timer';

class Pizza extends React.PureComponent {
	handleClick = (e) => {
		// console.log(this.props.pizza);
		this.props.getPizza(this.props.pizza);
	};

	fetchDelete = () => {
		fetch(`http://localhost:3000/pizzas/${this.props.pizza.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.props.pizza)
    })
	}

	render() {
		const pizzaSliceArray = this.props.pizza.pizza_slices.map((pizza) => pizza.slices);
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return (
			<div className="container" className="row" className="col s12 m6">
				<div className="container">
					<Timer fetchDelete={this.fetchDelete} />
					<span>Pizza: {this.props.pizza.name}</span>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdj2sMYwRV7t0kF9DKH6LrKDFeQdW1SNIZh3fUgwmH-1TcXu"
						alt="picture of a pizza"
					/>
				</div>

				<div className="container">
					<span>Who's eating This bad boi:</span>
					<span>
						<UserIndex slices={this.props.pizza.pizza_slices} />
					</span>
					<i className="comment icon" />
				<p>
					Slices Remaining: {8 - pizzaSliceArray.reduce(reducer)}
				</p>
				<p>
					Price per Slice: ${(this.props.pizza.price/pizzaSliceArray.reduce(reducer)).toFixed(2)}
				</p>
				</div>

				{8 - pizzaSliceArray.reduce(reducer, 0) > 0 ? (
					<button
						onClick={this.handleClick}
						className="container waves-effect waves-light btn-large deep-orange"
					>
						I want a Slice!
					</button>
				) : null}
			</div>
		);
	}
}

export default Pizza;
