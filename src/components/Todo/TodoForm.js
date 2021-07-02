import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v1 as uuidv1 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import '../../App.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

//import '../../App.css';

function TodoForm({ addTodo }) {
  const classes = useStyles();
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv1() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Add item here..."
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button
        className="todo-add-btn"
        size="small"
        variant="contained"
        style={{ color: '#ffffff', backgroundColor: '#4183c4' }}
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={handleSubmit}
      >
        Add
      </Button>
    </form>
  );
}

export default TodoForm;