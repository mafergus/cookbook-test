import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const recipes = [
  {
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry"
  },
  {
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
  }
]

class App extends Component {
  constructor(){
    super();
    this.state={
      name:""
    }
  }
render(){
    return (
      <div className="App">
        <div className="recipe-list">
         {
            recipes.map(({name}) => (
            <h1 key={name} onClick={()=> this.setState({name:name})} >{name}</h1>
              ))
         }
        </div>
      </div>
    );
}
}

export default App;
