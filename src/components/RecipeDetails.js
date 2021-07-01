import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetails = ({ ingredients }) => {
  /* return ingredients.map(ingredient => { */
    return (
      <div key={uuidv4()} className="ingredient-list">
        <div className="ingredient-text">{ingredients} </div>
      </div>
    );
 /*  }); */
};

export default RecipeDetails;
