import React, { useState } from "react";
import "./Item.css";
import EditIcon from './EditIcon';
import TrashIcon from './TrashIcon';

const Item = ({ todo, deleteTodo, onChange }) => {
  const [edit, setEdit] = useState(false);

  /*const editTodo = (e) => {
    setEdit(!edit);
  };

  const handleKeyDown = (e) => {
    e.key === "Enter" ? (todo = e.target.value) : console.log("olmadı");
  };*/

  return (
    <div className="item" key={todo.id}>
      {!edit ? (
        <>
          <label className="container">
            <input type="checkbox" id="checkbox" checked={todo.completed} onChange={onChange} />
            <label htmlFor="checkbox">{todo.text}</label>
            <span className="checkmark"></span>
          </label>
          <div className={todo.completed ? 'hiddenIcons' : 'shownIcons'}>
            <EditIcon />
            <TrashIcon buttonClick={deleteTodo} className="trash" />
          </div>
        </>
      ) : (
          <>
            <div className="editClass">
              {/* <input
              className="editInput"
              type="text"
              value={newTodo}
              name="todo"
              onKeyDown={handleKeyDown}
            /> */}
            </div>
          </>
        )}
    </div>
  );
};

export default Item;
