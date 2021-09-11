import React, { useState } from 'react';
import Search from '../components/Search';
import Recipe from '../components/Recipe';
import Announcer from '../components/Announcer';
import ".././App.css";
import { v4 as uuidv4 } from 'uuid';
import data from "../data/data.json";


const filterData = (data, query) => {
  if (!query) {
    return data;
  }

  return data.filter((data) => {
    const dataName = data.recipe_name.toLowerCase();
    return dataName.includes(query);
  });
};

function Home() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredData = filterData(data, searchQuery);
  

  return (
    <div className="App">
      <Announcer
        message={`${filteredData.length} data`}
      />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="recipes">
        {filteredData !== [] && filteredData.map(recipe =>
          <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default Home;