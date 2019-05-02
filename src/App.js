import React from 'react';
import logo from './logo.svg';
import './App.css';
import PizzaPage from './PizzaPage';

class App extends React.Component {
	render() {
		return (
			<div>
				<PizzaPage />
			</div>
			// <div className="App">
			//   <header className="App-header">
			//     <img src={pizzaName} className="App-logo" alt={pizzaName} />
			//     <p>
			//       Edit <code>src/App.js</code> {pizzaName}.
			//     </p>
			//     <a
			//       className="App-link"
			//       href="https://reactjs.org"
			//       target="_blank"
			//       rel="noopener noreferrer"
			//     >
			//       Learn React
			//     </a>
			//   </header>
			// </div>
		);
	}
}

export default App;
