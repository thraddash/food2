import React, { useState, useEffect, useRef } from 'react';
import ".././App.css";
import Product from "../product.json";
import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

function Pricing() {
  // Reference
  // Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(current_date)
  const current_date = Date.now();
  const date = Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(current_date)

  const timeRef = useRef();
  const nameRef = useRef();
  const amountRef = useRef();
  const priceRef = useRef();
  const seasonRef = useRef();
  const locationRef = useRef();
  const noteRef = useRef();

  // State 
  const [product, setProduct] = useState(Product);

  // Temp State
  const [time, setTime] = useState();
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [price, setPrice] = useState();
  const [season, setSeason] = useState();
  const [location, setLocation] = useState();
  const [note, setNote] = useState();

  const [updateID, setUpdateID] = useState();
  const [updateTime, setUpdateTime] = useState();
  const [updateName, setUpdateName] = useState();
  const [updateAmount, setUpdateAmount] = useState();
  const [updatePrice, setUpdatePrice] = useState();
  const [updateSeason, setUpdateSeason] = useState();
  const [updateLocation, setUpdateLocation] = useState();
  const [updateNote, setUpdateNote] = useState();

  // Effect
  //////////////////////////////////////////
  useEffect(() => {
    // console.log(product);
    // setDate(Product)
    // clear form fields
    timeRef.current.value = null;
    nameRef.current.value = null;
    amountRef.current.value = null;
    priceRef.current.value = null;
    seasonRef.current.value = null;
    locationRef.current.value = null;
    noteRef.current.value = null;
  }, [product]);



  // Add Post
  //////////////////////////////////////////
  const addPost = () => {
    if (name && note) {
      // create new post object
      let newPost = {
        "id": uuidv1(),
        "timestamp": time,
        "name": name,
        "amount": amount,
        "price": price,
        "season": season,
        "location": location,
        "note": note
      }
      // merge new post with copy of old state
      let posts = [...product, newPost];
      // push new object to state
      setProduct(posts);
      // clear name and note from state
      setTime();
      setName();
      setAmount();
      setPrice();
      setSeason();
      setLocation();
      setNote();

      // update write to json file
      saveJson(posts);

    }
  }



  // Delete Post 
  //////////////////////////////////////////
  const deletePost = (key) => {
    // filter out post containing that id
    let filterOutPost = [...product].filter(OBJ => OBJ.id !== key);
    // save the rest in state
    setProduct(filterOutPost);

    // update write to json file
    saveJson(filterOutPost);

  }

  // Populate Post
  ////////////////////////////////////////// 
  const populatePost = (key, time, name, amount, price, season, location, note) => {
    setUpdateID(key);
    setUpdateTime(time);
    setUpdateName(name);
    setUpdateAmount(amount);
    setUpdatePrice(price);
    setUpdateSeason(season);
    setUpdateLocation(location);
    setUpdateNote(note);
  }

  // Cancel Post
  const cancelPost = () => {
    window.location.reload(false);
  }

  // Update Post 
  //////////////////////////////////////////
  const updatePost = () => {
    // populate post info from temp state and prepare new object for changed post
    let editedPost = {
      "id": updateID,
      "timestamp": updateTime,
      "name": updateName,
      "amount": updateAmount,
      "price": updatePrice,
      "season": updateSeason,
      "location": updateLocation,
      "note": updateNote
    }
    // remove old post with same ID and get the remaining product /// filter 
    let filterPost = [...product].filter(OBJ => OBJ.id !== updateID);
    // prepare object with edited post + remaining product from object above
    let posts = [...filterPost, editedPost];
    // push int state
    setProduct(posts);

    setUpdateID();
    setUpdateTime();
    setUpdateName();
    setUpdateAmount();
    setUpdatePrice();
    setUpdateSeason();
    setUpdateLocation();
    setUpdateNote();

    // update write to json file
    saveJson(posts);

  }

  // Write to JSON File
  //////////////////////////////////////////
  // this function will receive all uodated state / posts after you add, edit delete post
  const saveJson = (posts) => {
    // api URL // end point from node server / express server
    const url = 'http://localhost:5000/history'
    axios.post(url, posts)
      .then(response => {
        // console.log(response);
      });
  }

  // Bonus Section
  //////////////////////////////////////////
  // Downloading JSON File
  const saveProduct = jsonDate => {
    const fileProduct = JSON.stringify(jsonDate);

    const blob = new Blob([fileProduct], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    // create link
    const link = document.createElement('a');
    // point link to file to be downloaded
    link.download = 'newProduct.json';
    link.href = url;
    // trigger download
    link.click();
  }

  return (
    <div className='pricing'>
      <div>
        <h1>Pricing & Location</h1>
        <input placeholder={'Date ' + date}
          onChange={e => setTime(e.target.value)}
          value={time || ''}
          ref={timeRef}
        />
        <br />
        <input placeholder="Name"
          onChange={e => setName(e.target.value)}
          value={name || ''}
          ref={nameRef}
        />
        <br />
        <input placeholder="Amount"
          onChange={e => setAmount(e.target.value)}
          value={amount || ''}
          ref={amountRef}
        />
        <br />
        <input placeholder="Price"
          onChange={e => setPrice(e.target.value)}
          value={price || ''}
          ref={priceRef}
        />
        <br />
        <input placeholder="In Season"
          onChange={e => setSeason(e.target.value)}
          value={season || ''}
          ref={seasonRef}
        />
        <br />
        <input placeholder="Location"
          onChange={e => setLocation(e.target.value)}
          value={location || ''}
          ref={locationRef}
        />
        <br />
        <textarea
          placeholder="Note"
          onChange={e => setNote(e.target.value)}
          value={note || ''}
          ref={noteRef}
        ></textarea>
        <br />
        <button onClick={addPost}>Add Post</button>
      </div>

      {
        updateTime || updateName || updateAmount || updatePrice || updateSeason || updateLocation || updateNote ?
          (
            <div>
              <h4>Update Post</h4>
              <input placeholder={'Date ' + date}
                onChange={e => setUpdateTime(e.target.value)}
                value={updateTime || ''}
              />
              <br />
              <input placeholder="Name"
                onChange={e => setUpdateName(e.target.value)}
                value={updateName || ''}
              />
              <br />
              <input placeholder="Amount"
                onChange={e => setUpdateAmount(e.target.value)}
                value={updateAmount || ''}
              />
              <br />
              <input placeholder="Price"
                onChange={e => setUpdatePrice(e.target.value)}
                value={updatePrice || ''}
              />
              <br />
              <input placeholder="In Season"
                onChange={e => setUpdateSeason(e.target.value)}
                value={updateSeason || ''}
              />
              <br />
              <input placeholder="Location"
                onChange={e => setUpdateLocation(e.target.value)}
                value={updateLocation || ''}
              />
              <br />
              <textarea
                placeholder="Note"
                onChange={e => setUpdateNote(e.target.value)}
                value={updateNote || ''}
              ></textarea>
              <br />
              <button onClick={updatePost}>Update Post</button>
              <button onClick={cancelPost}>Cancel</button>
            </div>
          ) : null
      }

      <div className="posts">
        {product ? product.map(post => {
          return (
            <div key={post.id} className="post">
              <p>{post.timestamp}</p>
              <p>{post.name}</p>
              <p>{post.amount}</p>
              <p>{post.price}</p>
              <p>{post.season}</p>
              <p>{post.location}</p>
              <p>{post.note}</p>
              <button onClick={() => populatePost(post.id, post.timestamp, post.name, post.amount, post.price, post.season, post.location, post.note)}>Edit</button>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          )
        }) : null}
        <div className="btn-download">
          <button onClick={e => saveProduct(product)}>Download Product</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;