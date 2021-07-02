import React from 'react';
import DownloadJson from '../components/DownloadJson';
import ".././App.css";

function Download() {
  return (
    <div className='download' >
      <center>
        <h1>Download Recipes JSON file</h1>
      <DownloadJson />
      </center>
    </div>
  );
}

export default Download;