import React from 'react';
import Divider from '@material-ui/core/Divider';
import { v4 as uuidv4 } from 'uuid';
import ImageAccordion from './Accordion/ImageAccordion';
import VideoAccordion from './Accordion/VideoAccordion';

const RecipeDetails = ({ ingredients, direction, note, misc_image, misc_video }) => {

  return (
    <div key={uuidv4()} className="ingredient-list">
      <div className="ingredient-text"><h5>Ingredients:</h5>{ingredients} </div><br />
      <Divider />
      <div className="ingredient-text"><h5>Directions:</h5>{direction} </div><br />
      <Divider />
      <div className="ingredient-text"><h5>Notes:</h5>{note} </div><br />
      <Divider />
      <ImageAccordion title="Additional Images" content={misc_image} />
      <Divider />
      <VideoAccordion title="Videos" content={misc_video} />
    </div>
  );
};

export default RecipeDetails;
