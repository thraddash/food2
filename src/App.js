import React, {useState, useEffect, useRef } from 'react';
import './App.css';
import Data from "./data.json";
import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

function App() {

  // Timestamp
  //const timestamp = Date.now();
  //console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));

  // Reference
  const recipeNameRef = useRef();
  const categoryRef = useRef();
  const ingredientRef = useRef();
  const directionRef = useRef();
  const noteRef = useRef();

  // State
  const [data, setData] = useState(Data);

  // Temp State
  const [recipe_name, setRecipeName] = useState();
  const [category, setCategory] = useState();
  const [ingredient, setIngredient] = useState();
  const [direction, setDirection] = useState();
  const [note, setNote] = useState();

  const [updateID, setUpdateID] = useState();
  const [updateRecipeName, setUpdateRecipeName] = useState();
  const [updateCategory, setUpdateCategory] = useState();
  const [updateIngredient, setUpdateIngredient] = useState();
  const [updateDirection, setUpdateDirection] = useState();
  const [updateNote, setUpdateNote] = useState();

  // Effect
  //////////////////////////////////////  
  useEffect(() => {
    // console.log(data)
    // setData(Data)
    // clear form fields
    //recipeNameRef.current.value = '';
    //ingredientRef.current.value = '';

  },[data]);

  // Add Post
  //////////////////////////////////////
  const addPost = () => {
    if(recipe_name && category && ingredient) {
      // create new post object
      let newPost = {
        "id": uuidv1(),
        "recipe_name": recipe_name,
        "category": category,
        "ingredient": ingredient,
        "direction": direction, 
        "note": note
      }
      // merge new post with copy of old state
      let posts = [...data, newPost];
      // push new object to state
      setData(posts);
      // clear recipe_name and ingredient from state
      setRecipeName();
      setCategory();
      setIngredient();
      setDirection();
      setNote();

      // update write to json file
      saveJson(posts);

    }
  }

  // Delete Post
  //////////////////////////////////////
  const deletePost = (key) => {
    // filter out post containing that id, copy ...data first
    let filterOutPost = [...data].filter(OBJ=>OBJ.id!==key);
    // save the rest in state
    setData(filterOutPost);

    // update write to json file
    saveJson(filterOutPost);
  }

  // Populate Post
  //////////////////////////////////////
  const populatePost = (key, recipe_name, category, ingredient, direction, note) => {
    setUpdateID(key);
    setUpdateRecipeName(recipe_name);
    setUpdateCategory(category);
    setUpdateIngredient(ingredient);
    setUpdateDirection(direction);
    setUpdateNote(note);
  }

  // Update Post
  //////////////////////////////////////
  const updatePost = () => {
    // populate post info from temp state and prepare new object for changed post
    let editedPost = {
      "id": updateID,
      "recipe_name": updateRecipeName,
      "category": updateCategory,
      "ingredient": updateIngredient,
      "direction": updateDirection,
      "note": updateNote
    }
    // remove old post with same ID and get the remaining data /// filter 
    let filterPost = [...data].filter(OBJ=>OBJ.id!==updateID);
    // prepare object with edited post + remaining data from object above
    let posts = [...filterPost, editedPost];
    // push int state
    setData(posts);

    setUpdateID();
    setUpdateRecipeName();
    setUpdateCategory();
    setUpdateIngredient();
    setUpdateDirection();
    setUpdateNote();

    // update write to json file
    saveJson(posts);
  }

  // Write to JSON file
  //////////////////////////////////////
  // this function will receive all updated state / posts after you add, edit delete post
  const saveJson = (posts) => {
    // api URL // end point from node server / express server
    const url = 'http://localhost:5000/write'
    axios.post(url, posts)
    .then(response => {
      // console.log(response);
    });
  }

  // Download JSON File
  //////////////////////////////////////
  const saveData = jsonDate => {
    const fileData = JSON.stringify(jsonDate, null, 2);

    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    // create link
    const link = document.createElement('a');
    // point link to file to be downloaded
    link.download = 'newData.json';
    link.href = url;
    // trigger download
    link.click();
  }
  
  return (
    <div className="App">
      <div>
        <h4>Add New Post</h4>
        <input placeholder="Recipe Name"
          onChange={ e => setRecipeName( e.target.value) } 
          value={ recipe_name || '' }
          ref={ recipeNameRef }
        />
        <br />
        <input placeholder="Category"
          onChange={ e => setCategory( e.target.value) } 
          value={ category || '' }
          ref={ categoryRef }
        />
        <br />
        <textarea 
          placeholder="Ingredients"
          onChange={ e => setIngredient( e.target.value) } 
          value={ ingredient || '' }
          ref={ ingredientRef }  
        ></textarea>
        <br />
        <textarea 
          placeholder="Directions"
          onChange={ e => setDirection( e.target.value) } 
          value={ direction || '' }
          ref={ directionRef }  
        ></textarea>
        <br />
        <textarea 
          placeholder="Notes"
          onChange={ e => setNote( e.target.value) } 
          value={ note || '' }
          ref={ noteRef }  
        ></textarea>
        <br />
        <button onClick={ addPost }>Add Post</button>
      </div>

      {/* If temp state has got values of recipe_name, category and ingredient for update form show this */}
      {updateRecipeName || updateCategory || updateIngredient || updateDirection || updateNote ?
        (
          <div>
            <h4>Update Post</h4>
            <input placeholder="Recipe Name"
              onChange={e => setUpdateRecipeName(e.target.value)}
              value={updateRecipeName || ''}
            />
            <br />
            <input placeholder="Category"
              onChange={e => setUpdateCategory(e.target.value)}
              value={updateCategory || ''}
            />
            <br />
            <textarea placeholder="Ingredients"
              onChange={e => setUpdateIngredient(e.target.value)}
              value={updateIngredient || ''}
            ></textarea>
            <br />
            <textarea placeholder="Directions"
              onChange={e => setUpdateDirection(e.target.value)}
              value={updateDirection || ''}
            ></textarea>
            <br />
            <textarea placeholder="Notes"
              onChange={e => setUpdateNote(e.target.value)}
              value={updateNote || ''}
            ></textarea>
            <br />
            <button onClick={updatePost}>Update Post</button>
          </div>
        ) : null}
      
      <div className="posts">
        { data ? data.map(post => {
          return(
            <div key={ post.id } className="post">
              <h3>{ post.recipe_name }</h3>
              <p><b><u>Category:</u></b> { post.category }</p>
              <p><b><u>Ingredients:</u></b><br></br>{ post.ingredient }</p>
              <p><b><u>Directions:</u></b><br></br>{ post.direction }</p>
              <p><b><u>Notes:</u></b><br></br>{ post.note }</p>
              <button onClick={ () => populatePost(post.id, post.recipe_name, post.category, post.ingredient, post.direction, post.note) }>Edit</button>
              <button onClick={ () => deletePost(post.id) }>Delete</button>
            </div>
          )
        }) : null }
        <div className="btn-download">
          <button onClick={ e => saveData(data)}>Download Data</button>
        </div>
      </div>
    </div>
  );
}

export default App;
