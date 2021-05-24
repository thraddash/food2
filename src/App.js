import React, {useState, useEffect, useRef } from 'react';
import './App.css';
import Data from "./data.json";
import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

function App() {

  // Reference
  const titleRef = useRef();
  const contentRef = useRef();

  // State
  const [data, setData] = useState(Data);

  // Temp State
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const [updateID, setUpdateID] = useState();
  const [updateTitle, setUpdateTitle] = useState();
  const [updateContent, setUpdateContent] = useState();

  // Effect
  //////////////////////////////////////  
  useEffect(() => {
    // console.log(data);
    // setData(Data)
  },[data]);

  // Add Post
  //////////////////////////////////////
  const addPost = () => {
    
  }

  // Delete Post
  //////////////////////////////////////
  const deletePost = (key) => {

  }

  // Populate Post
  //////////////////////////////////////
  const populatePost = (key, title, content) => {
    console.log(key)
    console.log(title)
    console.log(content)
  }

  // Update Post
  //////////////////////////////////////
  const updatePost = () => {

  }

  // Function to write to JSON file
  //////////////////////////////////////
  const saveJson = (posts) => {

  }

  // Bonus Section
  //////////////////////////////////////

  return (
    <div className="App">
      <div>
        <h4>Add New Post</h4>
        <input placeholder="Title"
          onChange={ e => setTitle( e.target.value) } 
          value={ title || '' }
          ref={ titleRef }
        />
        <br />
        <textarea 
          placeholder="Content"
          onChange={ e => setContent( e.target.value) } 
          value={ content || '' }
          ref={ contentRef }  
        ></textarea>
        <br />
        <button onClick={ addPost }>Add Post</button>
      </div>

      <div>
        <h4>Update Post</h4>
        <input placeholder="Title"
          onChange={e => setUpdateTitle(e.target.value)}
          value={ updateTitle || '' }
        />
        <br />
        <textarea placeholder="Content"
          placeholder="Content"
          onChange={e => setUpdateContent(e.target.value)}
          value={ updateContent || '' }
        ></textarea>
        <br />
        <button onClick={ updatePost }>Update Post</button>
      </div>

      <div className="posts">
        { data ? data.map(post => {
          return(
            <div key={ post.id } className="post">
              <h3>{ post.title } </h3>
              <p>{ post.content }</p>
              <button onClick={ () => populatePost(post.id, post.title, post.content) }>Edit</button>
              <button onClick={ () => deletePost(post.id) }>Delete</button>
            </div>
          )
        }) : null }
      </div>
    </div>
  );
}

export default App;
