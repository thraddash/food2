import React from 'react';
import './App.css';
import Data from "./data.json";

function App() {
  return (
    <div className="App">
      <div className="posts">
        { Data.map(post => {
          return(
            <div key={ post.id } className="post">
              <h3>{ post.title } </h3>
              <p>{ post.content }</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
