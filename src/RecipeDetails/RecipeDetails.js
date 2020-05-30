import React from 'react';
import PropTypes from 'prop-types';
import './RecipeDetails.css';

const RecipeDetails = ({
  name, author, description, imageUrl, ingredients,
}) => (
  <div className="recipe-data">
    <div className="recipe-image">
      <div className="name">
        {' '}
        {name}
        {' '}
      </div>
      <img alt={name} src={imageUrl} width="300px" height="300px" />
      <span>
        By
        {' '}
        {author}
      </span>
    </div>
    <div className="recipe-info">
      <p>{description}</p>
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {
            ingredients.map((ingredient, id) => (
              <li key={id}>{ingredient}</li>
            ))
          }
        </ul>
      </div>
    </div>

  </div>
);

RecipeDetails.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
};

export default RecipeDetails;
