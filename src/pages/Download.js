import React from 'react';
import ".././App.css";
import DownloadJson from '../components/DownloadJson';

function Download() {
  return (
    <div className='download' >
      <center>
        <h3>Download Recipes JSON file</h3>
      <DownloadJson />
      </center>
    </div>
  );
}

export default Download;