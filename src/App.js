import React, {useState, useEffect, useRef } from 'react';
import './App.css';
import Data from "./data.json";
import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

function App() {

  // Reference

  // State
  const [data, setData] = useState(Data);

  // Temp State

  // Effect
  useEffect(() => {
    // console.log(data);
    // setData(Data)
  },[data]);

  // Add Post
  const addPost = () => {

  }

  // Delete Post
  const deletePost = (key) => {

  }

  // Populate Post
  const populatePost = (key, title, content) => {
    console.log(key)
    console.log(title)
    console.log(content)
  }

  // Update Post
  const updatePost = () => {

  }

  // Function to write to JSON file
  const saveJson = (posts) => {

  }

  // Bonus Section

  return (
    <div className="App">
      <div>
        <h4>Add New Post</h4>
        <input placeholder="Title" />
        <br />
        <textarea placeholder="Content"></textarea>
        <br />
        <button>Add Post</button>
      </div>

      <div>
        <h4>Update Post</h4>
        <input placeholder="Title" />
        <br />
        <textarea placeholder="Content"></textarea>
        <br />
        <button>Update Post</button>
      </div>

      <div className="posts">
        { data ? data.map(post => {
          return(
            <div key={ post.id } className="post">
              <h3>{ post.title } </h3>
              <p>{ post.content }</p>
              <button onClick={ () => populatePost(post.id, post.title, post.content) }>Edit</button>
              <button>Delete</button>
            </div>
          )
        }) : null }
      </div>
    </div>
  );
}

export default App;
