import React from 'react';
import { v1 as uuidv1 } from 'uuid';

const RecipeDetails = ({ recipes }) => {
  return recipes.map(recipe => {
    return (
      <ul key={uuidv1()} className="recipe-list">
        <li className="recipe-text">{recipe.text}</li>
        <li className="recipe-weight">Weight - {recipe.weight}</li>
      </ul>
    );
  });
};

export default RecipeDetails;
