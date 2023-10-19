import React, { useEffect, useState } from "react";
import RecipeList from "./components/recipelist/RecipeList";
import RecipeDetails from "./components/recipedetails/RecipeDetails";

const recipes = [
    {
        author: "Jim",
        name: "Chicken Curry",
        description: "Delicious spicy chicken curry",
        img: 'https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg'
    },
    {
        author: "Aravind",
        name: "Hamburger",
        description: "Juicy burger with toppings and a soft bun",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoFa5LjBkFgL2XdA3-FF-iqwOumsq5HGOfg&usqp=CAU'
    },
];

function App() {
    const [selectedRecipe, setSelectedRecipe] = useState({})

    useEffect(() => {
        if (recipes?.length > 0) {
            setSelectedRecipe(recipes?.length > 0 ? recipes[0] : {})
        }
    }, [])
    const onSelect = (data) => setSelectedRecipe(data)
    
    return <div className="App">
        <RecipeList 
            data={recipes} 
            selectedRecipe={selectedRecipe}
            onSelect={onSelect}/>
        <RecipeDetails 
            data={selectedRecipe}
        />
    </div>;
}

export default App;
