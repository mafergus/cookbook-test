import React from "react";

import './RecipeDetails.css';

const RecipeDetails = ({name, author, description }) => {
    return(
        <div className="recipe-details-info">
           <div className="name"> {name} </div>
           <span>By {author}</span>
           <p>{description}</p>
        </div>
    )
}

export default RecipeDetails;