import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';
import PlaceholderImage from '.././images/placeholder.png'

const Recipe = ({ recipe }) => {
    const [show, setShow] = useState(false)
    const { recipe_name, image, ingredients, direction, note } = recipe;

    return (
        <div className="recipe">
            <h2>{recipe_name}</h2>
            <img
                src={'/images/' + image} alt={recipe_name}
                onError={(e) => {
                    e.target.src = PlaceholderImage
                    e.target.style = ''
                }}
            />
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} direction={direction} note={note} />}
        </div>
    );
};

export default Recipe;
