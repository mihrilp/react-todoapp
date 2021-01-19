import React from "react";
import "./Item.css";
import EditIcon from './EditIcon';
import TrashIcon from './TrashIcon';

const Item = ({ todo, deleteTodo, onChange,editTodo }) => {
  return (
    <div className="item" key={todo.id}>
      {!todo.editMode ? (
        <>
          <label className="container">
            <input type="checkbox" id="checkbox" checked={todo.completed} onChange={onChange} />
            <label htmlFor="checkbox">{todo.text}</label>
            <span className="checkmark"></span>
          </label>
          <div className={todo.completed ? 'hiddenIcons' : 'shownIcons'}>
            <EditIcon buttonClick={editTodo}/>
            <TrashIcon buttonClick={deleteTodo} className="trash" />
          </div>
        </>
      ) : (
          <>
            <div className="editClass">
              {//edit todo in here
              }
            </div>
          </>
        )}
    </div>
  );
};

export default Item;
