import React from "react";
import "./Item.css";
import TrashIcon from "./TrashIcon";

const Item = ({ todo, deleteTodo, onChange }) => {
  return (
    <div className="item" key={todo.id}>
      <label className="container">
        <input
          type="checkbox"
          id="checkbox"
          checked={todo.completed}
          onChange={onChange}
        />
        <label htmlFor="checkbox">{todo.text}</label>
        <span className="checkmark"></span>
      </label>
      <div className="trashIcon">
        <TrashIcon buttonClick={deleteTodo} className="trash" />
      </div>
    </div>
  );
};

export default Item;
