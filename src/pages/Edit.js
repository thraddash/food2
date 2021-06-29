import React from 'react';
import ".././App.css";
import EditDeleteRecipe from '../components/EditDeleteRecipe';

function Edit() {
  return (
    <div className='edit'>
      <h3>Edit/Delete/Update Recipes</h3>
      <EditDeleteRecipe />
    </div>
  );
}

export default Edit;