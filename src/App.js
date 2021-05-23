import React from 'react';
import './App.css';
import Data from "./data.json";

function App() {
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
        { Data.map(post => {
          return(
            <div key={ post.id } className="post">
              <h3>{ post.title } </h3>
              <p>{ post.content }</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
