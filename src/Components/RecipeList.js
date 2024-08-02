import React, { useContext } from 'react';
import { RecipeContext } from './RecipeContext';

const RecipeList = () => {
  const { recipes, setSelectedRecipe } = useContext(RecipeContext);

  return (
    <div className="recipe-list">
      <h1>Recipe List</h1>
      {recipes.map(recipe => (
        <button
          key={recipe.id}
          onClick={() => setSelectedRecipe(recipe)}
          className="recipe-button"
        >
          {recipe.name}
        </button>
      ))}
    </div>
  );
};

export default RecipeList;
