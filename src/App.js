import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    pizzas: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(data =>
    this.setState({
      pizzas: data
    }))
  }

  render(){
    const pizzaName = this.state.pizzas.map(pizza =>
      pizza.name)
    return (
      <div className="App">
        <header className="App-header">
          <img src={pizzaName} className="App-logo" alt={pizzaName} />
          <p>
            Edit <code>src/App.js</code> {pizzaName}.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
