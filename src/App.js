import './App.css'
import React from 'react';
import { RecipeProvider } from './Components/RecipeContext';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';
import './App.css';

function App() {
  return (
    <RecipeProvider>
      <div className="app">
        <RecipeList />
        <RecipeDetails />
      </div>
    </RecipeProvider>
  );
}

export default App;
