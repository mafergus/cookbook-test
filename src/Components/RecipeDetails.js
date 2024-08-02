import React, { useContext } from 'react';
import { RecipeContext } from './RecipeContext';

const RecipeDetails = () => {
  const { selectedRecipe } = useContext(RecipeContext);

  if (!selectedRecipe) {
    return <div className="recipe-details">Select a recipe to see the details.</div>;
  }

  const { name, image, ingredients, instructions, cuisine, tags, rating } = selectedRecipe;

  return (
    <div className="recipe-details">
      <h2>{name}</h2>
      <img src={image} alt={name} className="recipe-image" />
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p><strong>Ingredients:</strong> {ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> {instructions.join(', ')}</p>
      <p><strong>Tags:</strong> {tags.join(', ')}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  );
};

export default RecipeDetails;
