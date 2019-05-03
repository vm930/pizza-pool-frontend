import React from 'react';
import './App.css';
import PizzaPage from './PizzaPage';
import 'materialize-css/dist/css/materialize.min.css';
import LogIn from './LogIn';

class App extends React.Component {
	//this is adding materialized to React
	constructor() {
		super();
		this.M = window.M;
		this.state = {
			user: null
		};
	}

	componentDidMount() {
		var elems1 = document.querySelectorAll('.modal');
		var instances1 = this.M.Modal.init(elems1);
		var elems2 = document.querySelectorAll('.scrollspy');
		var instances1 = this.M.ScrollSpy.init(elems2);
	}

	getUser = (userInput) => {
		// console.log(userInput);
		fetch('http://localhost:3000/login/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: { name: userInput }
			})
		})
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					user: json
				});
			});
	};

	render() {
		return (
			<div>
				<LogIn getUser={this.getUser} />
				<PizzaPage currentUser={this.state.user} />
			</div>
		);
	}
}

export default App;
