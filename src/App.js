import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = e => {
    setTodo(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    if (todo === "") return;
    addTodo();
    setTodo("");
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        text: todo,
        completed: false
      }
    ]);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCheck = x => {
    x.completed = !x.completed;
    return(x.completed ? true : false);
  }

  return (
    <div className="App">
      <h1 className="header">Daily Todo List</h1>
      <form onSubmit={onSubmit}>
        <input className="inputTask" onChange={handleChange} value={todo} type="text" placeholder="Enter new task" />
        <button className="addButton">Add</button>
      </form>
      <div className="todoList">
        <ul>
          {todos.map(x => <li><div className="item" >
            <input onClick={handleCheck(x)} className="Checkbox" type="checkbox" /><label>{x.text}</label></div>
            <svg className="trashIcon" onClick={deleteTodo} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 352 512">
            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg></li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;