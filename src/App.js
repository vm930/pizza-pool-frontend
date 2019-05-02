import React from 'react';
import './App.css';
import PizzaPage from './PizzaPage';
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {
	//this is adding materialized to React
	constructor() {
		super();
		this.M = window.M;
	}

	componentDidMount() {
		var elems1 = document.querySelectorAll('.modal');
		var instances1 = this.M.Modal.init(elems1);
		var elems2 = document.querySelectorAll('.scrollspy');
		var instances1 = this.M.ScrollSpy.init(elems2);
	}

	render() {
		return (
			<div>
				<PizzaPage />
			</div>
		);
	}
}

export default App;
