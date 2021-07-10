import React from 'react';
import './App.css';
//import Data from "./data.json";
//import { v1 as uuidv1 } from 'uuid';
//import axios from 'axios';
//import "./styles.css";
//import DownloadJson from './components/DownloadJson';
//import EditDeleteRecipe from './components/EditDeleteRecipe';
//import AllRecipe from './components/AllRecipe';
import AddRecipe from './components/AddRecipe';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div>
          {/* <DownloadJson /> */}
        </div>
        <div className="column">
         {/*  <EditDeleteRecipe /> */}
        </div>
        {/* <center><h2><b>Display All Recipes</b></h2></center> */}
        <div>
           <AddRecipe />
        </div>
      </div>
    </div>
  );
}

export default App;
