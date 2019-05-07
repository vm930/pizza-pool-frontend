import React from 'react';
import './App.css';
import PizzaPage from './PizzaPage';
import 'materialize-css/dist/css/materialize.min.css';
import LogIn from './LogIn';
import { Route, Switch } from 'react-router-dom';
// import NewPizza from './NewPizza';

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
			<Switch>
				<Route path="/login" render={(props) => <LogIn getUser={this.getUser} {...props} />} />
				<Route path="/" render={() => <PizzaPage currentUser={this.state.user} />} />
				{/* <Route path="/new" render={() => <NewPizza />} /> */}
				{/* addPizza={this.addPizza} */}
			</Switch>
		);
	}
}

export default App;
