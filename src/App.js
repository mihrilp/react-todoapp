import React, { useState, useEffect } from "react";
import "./App.css";
import Item from "./components/Item";
import SmileIcon from "./components/SmileIcon";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const complete = todos.filter((t) => t.completed);
  const disComplete = todos.filter((t) => !t.completed);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const editTodo = (todo) => {
    todo.editMode = !todo.editMode;
    console.log(todo.editMode)
  }

  const deleteTodo = (todo) => {
    const newTodos = [...todos];
    const index = todos.indexOf(todo)
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCheck = (todo) => {
    todo.completed = !todo.completed;
    const rest = todos.filter((to) => todo.id !== to.id);
    setTodos([...rest, todo]);
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
      {disComplete.length > 0 ? (
        <div className="todoList">
          <ul>
            <h3>To Do</h3>
            {disComplete.map((todoItem) => (
              <li key={todoItem.id}>
                <Item
                  todo={todoItem}
                  editTodo={() => editTodo(todoItem)}
                  deleteTodo={() => deleteTodo(todoItem)}
                  onChange={() => handleCheck(todoItem)}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
          console.log("there is no todo")
        )}
      {complete.length > 0 ? (
        <div className="doneList">
          <ul>
            <h3>Completed</h3>
            {complete.map((doneItem) => (
              <li key={doneItem.id}>
                <Item
                  todo={doneItem}
                  onChange={() => handleCheck(doneItem)} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
          console.log("there is no done")
        )}
      {todos.length === 0 && (
        <div className="noTodo">
          <p>You have no todos today</p>
          <SmileIcon />
        </div>
      )}
    </div>
  );
}

export default App;
