import React, { createContext, useState, useEffect } from 'react';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, selectedRecipe, setSelectedRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeProvider };
