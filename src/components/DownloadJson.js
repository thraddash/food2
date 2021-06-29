import Data from '../data.json';


// Download JSON File
//////////////////////////////////////

const DownloadJson = () => {
  const saveData = jsonDate => {
    const fileData = JSON.stringify(jsonDate, null, 2);

    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    // create link
    const link = document.createElement('a');
    // point link to file to be downloaded
    link.download = 'RecipesData.json';
    link.href = url;
    // trigger download
    link.click();
  }

  return (
    <div className="btn-download">
      <button onClick={e => saveData(Data)}>Download Data</button>
    </div>
  )
}

export default DownloadJson;