import React, { Component } from 'react';
import './App.css';
import RecipeDetails from './RecipeDetails/RecipeDetails';


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
      name:recipes[0].name
    }
  }
render(){
    return (
      <div className="App">
        <div className="recipe-list">
          <h2>Recipe List</h2>
         {
            recipes.map(({name}) => (
            <h1 key={name} className={this.state.name === name ? `selected` : ""} onClick={()=> this.setState({name:name})} >{name}</h1>
              ))
         }
        </div>
        <div className="recipe-details">
          <h2>Recipe Details for: </h2>
         {
            recipes.filter(({name}) => (
             name === this.state.name
            ))
            .map(({name, author, description }) => (
              <RecipeDetails name={name} author={author} description={description} />
            ))
        }
        </div>
      </div>
    );
}
}

export default App;
