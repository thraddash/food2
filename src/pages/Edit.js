import React from 'react';
import EditDeleteRecipe from '../components/EditDeleteRecipe';
import ".././App.css";

function Edit() {
  return (
    <div className='edit'>
      <h1>Edit/Delete/Update Recipes</h1>
      <EditDeleteRecipe />
    </div>
  );
}

export default Edit;