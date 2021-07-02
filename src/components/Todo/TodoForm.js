import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v1 as uuidv1 } from 'uuid';
import AddIcon from '@material-ui/icons/Add';
import '../../App.css';

function TodoForm({ addTodo }) {

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
        size="small"
        variant="contained"
        style={{ backgroundColor: '#4183c4', color: 'white' }}
        startIcon={<AddIcon />}
        onClick={handleSubmit}
      >
        Add
      </Button>
    </form>
  );
}

export default TodoForm;