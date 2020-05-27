import React, { Component, useState } from 'react';
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

const App = () => {
  const [recipeDetail, setDetail] = useState(recipes[0]);
  return (
    <div className="App">
         <div className="recipe-list">
          <h2>Recipe List</h2>
         {
            recipes.map(({name, author, description }) => (
            <h1 key={name} className={recipeDetail.name === name ? `selected` : ""} onClick={()=> setDetail({name, author, description})} >{name}</h1>
              ))
         }
        </div>
        <div className="recipe-details">
          <h2>Recipe Details for: </h2>
          <RecipeDetails author={recipeDetail.author} name={recipeDetail.name} description={recipeDetail.description} />
        </div>
    </div>
  )
}

export default App;
