
// Download JSON File
//////////////////////////////////////

const saveData = jsonDate => {
    const fileData = JSON.stringify(jsonDate, null, 2);

    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    // create link
    const link = document.createElement('a');
    // point link to file to be downloaded
    link.download = 'newData.json';
    link.href = url;
    // trigger download
    link.click();
};

export default saveData;