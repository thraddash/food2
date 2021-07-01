import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails'

const Recipe = ({ recipe }) => {
    const [show, setShow] = useState(false)
    const { recipe_name, image, ingredients } = recipe;

    return (
        <div className="recipe">
            <h2>{recipe_name}</h2>
            <img src={image} alt={recipe_name} />
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    );
};

export default Recipe;
