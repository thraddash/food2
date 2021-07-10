import React from 'react';
import DownloadJson from '../components/DownloadJson';
import DownloadProductsJson from '../components/DownloadProductsJson';
import ".././App.css";

function Download() {
  return (
    <div className='download' >
      <center>
        <h1>Download JSON file</h1>
      <DownloadJson />
      <DownloadProductsJson />
      </center>
    </div>
  );
}

export default Download;