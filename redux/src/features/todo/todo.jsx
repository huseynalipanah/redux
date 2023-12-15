import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo , removeTodo, editTodo } from "./todoSlice";

const Todo = () => {
  const todo = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [issave, setSave] = useState(false);

  const handleEdit = (id) => {
    const todoItem = todo.find(item => item.id === id);
    setInput(todoItem.value);
    setEditId(id);
    setSave(true);
  }

  const handleSave = () => {
    dispatch(editTodo({ id: editId, value: input }));
    setInput("");
    setSave(false);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      {!issave ? (
        <button onClick={() => dispatch(addTodo({ value: input, id: uuidv4() }, setInput("") ))}>
          Add
        </button>
      ) : (
        <button onClick={handleSave}>Save</button>
      )}
      {todo.map((x) => (
        <li key={x.id}> {x.value} 
          <button onClick={() => dispatch(removeTodo(x.id))}>x</button>
          <button onClick={() => handleEdit(x.id)}>Edit</button>
        </li>
      ))}
    </div>
  );
};

export default Todo;
