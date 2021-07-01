import React, { useState } from 'react';
import Search from '../components/Search';
import Announcer from '../components/Announcer';
import ".././App.css";
import data from "../data.json";


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
      {data ? filteredData.map((recipe) => (
        <div key={recipe.id} className="recipe">
          <ul>
            <li>{recipe.recipe_name}</li>
          </ul>
        </div>
      )) : null}
    </div>
  )
}

export default Home;