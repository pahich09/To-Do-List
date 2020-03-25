import React, { Component } from "react";

export default class ItemTodo extends Component {
  render() {
    const {
      label,
      id,
      onDelete,
      toggleDone,
      isDone,
      toggleMarked,
      isImportant
    } = this.props;
    let itemStyles = "";
    itemStyles += isDone ? " done" : "";
    itemStyles += isImportant ? " marked" : "";

    return (
      <>
        <span
          className={itemStyles}
          onClick={() => {
            toggleDone(id);
          }}
        >
          {label}
        </span>
        <div>
          <button
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => toggleMarked(id)}
          >
            <i className="fa fa-exclamation"></i>
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </>
    );
  }
}
