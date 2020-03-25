import React from "react";
import ItemTodo from "../ItemTodo";

const ListTodo = ({ todos, onDelete, toggleDone, toggleMarked }) => {
  const elements = todos.map(el => {
    return (
      <li key={el.id} className="list-group-item todo-item">
        <ItemTodo
          {...el}
          onDelete={onDelete}
          toggleDone={toggleDone}
          toggleMarked={toggleMarked}
        />
      </li>
    );
  });
  return <ul className="list-group">{elements}</ul>;
};

export default ListTodo;
