//import ".././App.css";
import data from "../data.json";


function AllRecipe() {

    return (
        <div className="users">
            {data ? data.map((data) => (
                <div key={data.id} className="recipe">
                    <h3>{data.recipe_name}</h3>
                    <img src={'/images/' + data.image} alt=""></img>
                    <p><b><u>Category:</u></b> {data.category}</p>
                    <p><b><u>Ingredients:</u></b><br></br>{data.ingredient}</p>
                    <p><b><u>Directions:</u></b><br></br>{data.direction}</p>
                    <p><b><u>Notes:</u></b><br></br>{data.note}</p>
                </div>
            )) : null}
        </div>
    );
}

export default AllRecipe;
