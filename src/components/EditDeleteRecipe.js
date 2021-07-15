import React, { useState, useEffect } from 'react';
import '../App.css';
import Data from "../data.json";
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PlaceholderImage from '.././images/placeholder.png'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function EditDeleteRecipe() {
  const classes = useStyles();
  // Timestamp
  //const timestamp = Date.now();
  //console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));

  // State
  const [data, setData] = useState(Data);

  const [updateID, setUpdateID] = useState();
  const [updateRecipeName, setUpdateRecipeName] = useState();
  const [updateCategory, setUpdateCategory] = useState();
  const [updateImage, setUpdateImage] = useState();
  const [updateIngredient, setUpdateIngredient] = useState();
  const [updateDirection, setUpdateDirection] = useState();
  const [updateNote, setUpdateNote] = useState();
  const [updateMiscImage, setUpdateMiscImage] = useState();
  const [updateMiscVideo, setUpdateMiscVideo] = useState();

  // Effect
  //////////////////////////////////////  
  useEffect(() => {
    // console.log(data)
    // setData(Data)
    // clear form fields
    //recipeNameRef.current.value = '';
    //ingredientRef.current.value = '';

  }, [data]);

  // Delete Post
  //////////////////////////////////////
  const deletePost = (key) => {
    // filter out post containing that id, copy ...data first
    let filterOutPost = [...data].filter(OBJ => OBJ.id !== key);
    // save the rest in state
    setData(filterOutPost);

    // update write to json file
    saveJson(filterOutPost);
  }

  // Populate Post
  //////////////////////////////////////
  const populatePost = (key, recipe_name, category, image, ingredient, direction, note, misc_image, misc_video) => {
    setUpdateID(key);
    setUpdateRecipeName(recipe_name);
    setUpdateCategory(category);
    setUpdateImage(image);
    setUpdateIngredient(ingredient);
    setUpdateDirection(direction);
    setUpdateNote(note);
    setUpdateMiscImage(misc_image);
    setUpdateMiscVideo(misc_video);
  }

  // Cancel Post
  const cancelPost = () => {
    window.location.reload(false);
  }

  // Update Post
  //////////////////////////////////////
  const updatePost = () => {
    // populate post info from temp state and prepare new object for changed post
    let editedPost = {
      "id": updateID,
      "recipe_name": updateRecipeName,
      "category": updateCategory,
      "image": updateImage,
      "ingredient": updateIngredient,
      "direction": updateDirection,
      "note": updateNote,
      "misc_image": updateMiscImage,
      "misc_video": updateMiscVideo
    }
    // remove old post with same ID and get the remaining data /// filter 
    let filterPost = [...data].filter(OBJ => OBJ.id !== updateID);
    // prepare object with edited post + remaining data from object above
    let posts = [...filterPost, editedPost];
    // push int state
    setData(posts);

    setUpdateID();
    setUpdateRecipeName();
    setUpdateCategory();
    setUpdateImage();
    setUpdateIngredient();
    setUpdateDirection();
    setUpdateNote();
    setUpdateMiscImage();
    setUpdateMiscVideo();

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

  return (
    <div className="App">
      {/* If temp state has got values of recipe_name, category and ingredient for update form show this */}
      {updateRecipeName || updateCategory || updateImage || updateIngredient || updateDirection || updateNote || updateMiscImage || updateMiscVideo ?
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
            <input placeholder="Image name must match uploaded filename"
              onChange={e => setUpdateImage(e.target.value)}
              value={updateImage || ''}
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
            <textarea placeholder="Misc Images (comma separated)"
              onChange={e => setUpdateMiscImage(e.target.value)}
              value={updateMiscImage || ''}
            ></textarea>
            <br />
            <textarea placeholder="Misc Videos (comma separated)"
              onChange={e => setUpdateMiscVideo(e.target.value)}
              value={updateMiscVideo || ''}
            ></textarea>
            <br />
            <button onClick={updatePost}>Update Post</button>
            <button onClick={cancelPost}>Cancel</button>
          </div>
        ) : null}

      {<div className="posts">
        {data ? data.map(post => {
          return (
            <div key={post.id} className="post">
              <h3>{post.recipe_name}</h3>
              <img src={'/images/' + post.image} alt="" onError={(e) => {
                e.target.src = PlaceholderImage
                e.target.style = 'object-fit: scale-down;'
              }}></img>
              <p><b><u>Category:</u></b> {post.category}</p>
              <p><b><u>Ingredients:</u></b><br></br>{post.ingredients}</p>
              <p><b><u>Directions:</u></b><br></br>{post.direction}</p>
              <p><b><u>Notes:</u></b><br></br>{post.note}</p>
              <p><b><u>MiscImage:</u></b><br></br>{post.misc_image}</p>
              <p><b><u>MiscVideo:</u></b><br></br>{post.misc_video}</p>
              <Button
                size="small"
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<EditIcon />}
                onClick={() => populatePost(post.id, post.recipe_name, post.category, post.image, post.ingredient, post.direction, post.note, post.misc_image, post.misc_video)}
              >
                Edit
              </Button>
              <Button
                size="small"
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => deletePost(post.id)}
              >
                Delete
              </Button>
            </div>
          )
        }) : null}

      </div>}

    </div>
  );
}

export default EditDeleteRecipe;
