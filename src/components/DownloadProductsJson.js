import product from '../product.json';


// Download JSON File
//////////////////////////////////////

const DownloadProductsJson = () => {
  const saveProduct = jsonDate => {
    const fileProduct = JSON.stringify(jsonDate, null, 2);

    const blob = new Blob([fileProduct], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    // create link
    const link = document.createElement('a');
    // point link to file to be downloaded
    link.download = 'Products.json';
    link.href = url;
    // trigger download
    link.click();
  }

  return (
    <div className="btn-download" >
      <button onClick={e => saveProduct(product)} >Download Products</button>
    </div>
  )
}

export default DownloadProductsJson;