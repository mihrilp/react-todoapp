import React, { useState } from "react";
import "./App.css";
import Item from './components/Item';
import SmileIcon from './components/SmileIcon';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        completed: false,
        editMode: false,
      },
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    addTodo();
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const remove = () => {
    const arrTodo = todos.filter((item) => item.completed !== true);
    const arrDone = done.filter((item) => item.completed === true);
    setTodos(arrTodo);
    setDone(arrDone);
  };

  const handleCheck = (todo) => {
    todo.completed = !todo.completed
    remove();
    return todo.completed ? (setDone([
      ...done,
      {
        id: done.length + 1,
        text: todo.text,
        completed: todo.completed,
      },
    ])
    ) : (setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo.text,
        completed: todo.completed,
      },
    ])
      )
  };

  return (
    <div className="App">
      <h1 className="header">Daily Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          className="inputTask"
          onChange={handleChange}
          value={todo}
          type="text"
          placeholder="Enter new task"
        />
        <button className="addButton">Add</button>
      </form>
      {todos.length > 0 ? (
        <div className="todoList">
          <ul>
            <h3>To Do</h3>
            {todos.map((todoItem) => (
              <li>
                <Item
                  todo={todoItem}
                  deleteTodo={deleteTodo}
                  onChange={() => handleCheck(todoItem)}
                />
              </li>
            ))}
          </ul>
        </div>) : (
          console.log("there is no todo")
        )}
      {done.length > 0 ? (
        <div className="doneList">
          <ul>
            <h3>Completed</h3>
            {done.map((doneItem) => (
              <li>
                <Item
                  todo={doneItem}
                  onChange={() => handleCheck(doneItem)}
                />
              </li>
            ))}
          </ul>
        </div>) : (
          console.log("there is no done")
        )
      }
      {todos.length === 0 && done.length === 0 ? (
        <div className='noTodo'>
          <p>You have no todos today</p>
          <SmileIcon />
        </div>) : (
          console.log("nothing")
        )}
    </div>
  );
}

export default App;
