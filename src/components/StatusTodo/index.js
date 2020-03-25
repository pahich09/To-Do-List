import React from "react";

const StatusTodo = props => {
  return (
    <div className="status-todo">
      <span>{props.active}</span> more to do, <span> {props.done}</span> done
    </div>
  );
};

export default StatusTodo;
