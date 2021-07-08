import React from 'react';
import Divider from '@material-ui/core/Divider';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetails = ({ingredients, direction, note}) => {
  /* return ingredients.map(ingredient => { */
    return (
      <div key={uuidv4()} className="ingredient-list">
        <div className="ingredient-text"><h5>Ingredients:</h5>{ingredients} </div><br/>
        <Divider/>
        <div className="ingredient-text"><h5>Directions:</h5>{direction} </div><br/>
        <Divider/>
        <div className="ingredient-text"><h5>Notes:</h5>{note} </div><br/>
      </div>
    );
 /*  }); */
};

export default RecipeDetails;
