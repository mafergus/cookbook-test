import React from "react";

import './RecipeDetails.css';

const RecipeDetails = ({name, author, description, imageUrl, ingredients }) => {
    return(
        <div className="recipe-data">
            <div className="recipe-image">
             <div className="name"> {name} </div>
              <img src={imageUrl} width="300px" />
              <span>By {author}</span>
            </div>
            <div className="recipe-info">
              <p>{description}</p>
              <div className="ingredients">
                  <h3>Ingredients</h3>
                  <ul>
                      {
                          ingredients.map(ingredient => {
                              return(
                                  <li>ingredient</li>
                              )
                          })
                      }
                  </ul>
              </div>
            </div>
           
        </div>
    )
}

export default RecipeDetails;