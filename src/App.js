import React, { useState } from 'react';
import './App.css';
import RecipeDetails from './RecipeDetails/RecipeDetails';


const recipes = [
  {
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry. Chicken pieces are cooked in an aromatic, deliciously seasoned curry sauce then it's finished off.",
    imageUrl: "https://www.cookingclassy.com/wp-content/uploads/2018/08/chicken-curry-11-768x1152.jpg",
    ingredients: [
          "1 1/2 tsp ground coriander",
          "1 tsp ground cumin",
          "1/2 tsp turmeric",
          "1/2 tsp fennel seeds, (crushed in a small bag with a meat mallet)",
          "1/2 tsp ground cinnamon"
    ]
  },
  {
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun. Here's what you need: ground beef, kosher salt, freshly ground black pepper, vegetable oil, cheese",
    imageUrl: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg",
    ingredients: [
          "12 oz ground beef",
          "kosher salt, to taste",
          "freshly ground black pepper",
          "1 tablespoon vegetable oil",
          "2 slices cheese, such as swiss, cheddar, or american, optional"
    ]
  }
]

const App = () => {
  const [recipeDetail, setDetail] = useState(recipes[0]);
  return (
    <div className="App">
         <div className="recipe-list">
          <h2>Recipe List</h2>
         {
            recipes.map(({name, author, description, imageUrl, ingredients }) => (
            <h1 key={name} className={recipeDetail.name === name ? `selected` : ""} onClick={()=> setDetail({name, author, description,  imageUrl, ingredients })} >{name}</h1>
              ))
         }
        </div>
        <div className="recipe-details">
          <h2>Recipe Details for: </h2>
          <RecipeDetails author={recipeDetail.author} name={recipeDetail.name} description={recipeDetail.description} img={recipeDetail.imageUrl} ingredients={recipeDetail.ingredients}/>
        </div>
    </div>
  )
}

export default App;
