import React, { useState, useEffect, useRef } from 'react';
import ".././App.css";
import Product from "../product.json";
import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
/* import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'; */
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

/* const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
}); */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Pricing() {
  /* const { row } = props;
  const [open, setOpen] = React.useState(false); */
  /* const classes = useRowStyles(); */
  const classes = useStyles();

  // Reference
  // Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(current_date)
  const current_date = Date.now();
  const date = Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(current_date)

  const timeRef = useRef();
  const nameRef = useRef();
  const amountRef = useRef();
  const priceRef = useRef();
  const seasonRef = useRef();
  const noteRef = useRef();

  // State 
  const [product, setProduct] = useState(Product);

  // Temp State
  const [time, setTime] = useState();
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [price, setPrice] = useState();
  const [season, setSeason] = useState();
  const [note, setNote] = useState();

  const [updateID, setUpdateID] = useState();
  const [updateTime, setUpdateTime] = useState();
  const [updateName, setUpdateName] = useState();
  const [updateAmount, setUpdateAmount] = useState();
  const [updatePrice, setUpdatePrice] = useState();
  const [updateSeason, setUpdateSeason] = useState();
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
  const populatePost = (key, time, name, amount, price, season, note) => {
    setUpdateID(key);
    setUpdateTime(time);
    setUpdateName(name);
    setUpdateAmount(amount);
    setUpdatePrice(price);
    setUpdateSeason(season);
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

    <React.Fragment>
      <h1>Pricing & Location</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className={classes.root}>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product ? product.map(post => {
              return (
                <TableRow key={post.id}>
                  <TableCell>{post.name}</TableCell>
                  <TableCell>{post.price}</TableCell>
                  <TableCell>{post.amount}</TableCell>
                  <TableCell key={post.id} className="post">
                    <button onClick={() => populatePost(post.id, post.timestamp, post.name, post.amount, post.price, post.season, post.location, post.note)}><EditIcon fontSize="small" color="primary" /></button>
                    <button onClick={() => deletePost(post.id)}><DeleteIcon fontSize="small" color="secondary" /></button>
                  </TableCell>
                </TableRow>
              )
            }) : null}
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      Date: <input placeholder={'Enter ' + date}
        onChange={e => setTime(e.target.value)}
        value={time || ''}
        ref={timeRef} style={{ width: 'auto', height: '5px', border: '0' }}
      />

      <br />
      Name: <input placeholder="Name of Item"
        onChange={e => setName(e.target.value)}
        value={name || ''}
        ref={nameRef} style={{ width: 'auto', height: '5px', border: '0' }}
      />
      <br />
      Price: <input placeholder="Enter Price"
        onChange={e => setPrice(e.target.value)}
        value={price || ''}
        ref={priceRef} style={{ width: 'auto', height: '5px', border: '0' }}
      />
      <br />
      Amount: <input placeholder="Amount"
        onChange={e => setAmount(e.target.value)}
        value={amount || ''}
        ref={amountRef} style={{ width: 'auto', height: '5px', border: '0' }}
      />
      <br />
      In Season: <input placeholder="Enter Month"
        onChange={e => setSeason(e.target.value)}
        value={season || ''}
        ref={seasonRef} style={{ width: 'auto', height: '5px', border: '0' }}
      />
      <br />
      <textarea
        placeholder="Additional Notes"
        onChange={e => setNote(e.target.value)}
        value={note || ''}
        ref={noteRef} style={{ width: 'auto' }}
      ></textarea>
      <br />
      <div style={{ display: "flex" }}>
        <button onClick={addPost} style={{ marginRight: "auto" }}>Add Post</button>  
      </div>
      <button onClick={e => saveProduct(product)}>Download Product</button>


      {
        updateTime || updateName || updateAmount || updatePrice || updateSeason || updateNote ?
          (
            <div>
              <h4>Update Post</h4>
              Date: <input placeholder={'Date ' + date}
                onChange={e => setUpdateTime(e.target.value)}
                value={updateTime || ''}
                style={{ width: 'auto', height: '5px' }}
              />
              <br />
              Name: <input placeholder="Name of Item"
                onChange={e => setUpdateName(e.target.value)}
                value={updateName || ''}
                style={{ width: 'auto', height: '5px' }}
              />
              <br />
              Amount: <input placeholder="Amount"
                onChange={e => setUpdateAmount(e.target.value)}
                value={updateAmount || ''}
                style={{ width: 'auto', height: '5px' }}
              />
              <br />
              Pricing: <input placeholder="Pricing"
                onChange={e => setUpdatePrice(e.target.value)}
                value={updatePrice || ''}
                style={{ width: 'auto', height: '5px' }}
              />
              <br />
              In Season: <input placeholder="Enter Month"
                onChange={e => setUpdateSeason(e.target.value)}
                value={updateSeason || ''}
                style={{ width: 'auto', height: '5px' }}
              />
              <br />
            
              Notes: <textarea
                placeholder="Additional Notes"
                onChange={e => setUpdateNote(e.target.value)}
                value={updateNote || ''}
                style={{ width: 'auto' }}
              ></textarea>
              <br />
              <button onClick={updatePost}>Update Post</button>
              <button onClick={cancelPost}>Cancel</button>
            </div>
          ) : null
      }
    </React.Fragment>
  );
}

export default Pricing;