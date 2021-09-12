import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';
import PlaceholderImage from '.././images/placeholder.png'

const Recipe = ({ recipe }) => {
    const [show, setShow] = useState(false)
    const { recipe_name, image, ingredient, direction, note, misc_image, misc_video } = recipe;

    return (
        <div className="recipe">
            <h2>{recipe_name}</h2>
            <img
                src={'/images/' + image} alt={recipe_name}
                onError={(e) => {
                    e.target.src = PlaceholderImage
                    e.target.style = 'object-fit: scale-down;'
                }}
            />
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredient={ingredient} direction={direction} note={note} misc_image={misc_image} misc_video={misc_video} />}
        </div>
    );
};

export default Recipe;
