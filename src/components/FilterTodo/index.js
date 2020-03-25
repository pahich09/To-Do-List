import React from "react";

const FilterTodo = ({ onFilter, filterStatus }) => {
  console.log(filterStatus);
  return (
    <div className="btn-group">
      <button
        className={
          filterStatus === "all"
            ? "btn btn-primary"
            : "btn  btn-outline-secondary"
        }
        onClick={() => onFilter("all")}
      >
        All
      </button>
      <button
        className={
          filterStatus === "active"
            ? "btn btn-info"
            : "btn  btn-outline-secondary"
        }
        onClick={() => onFilter("active")}
      >
        Active
      </button>
      <button
        className={
          filterStatus === "done"
            ? "btn btn-success"
            : "btn  btn-outline-secondary"
        }
        onClick={() => onFilter("done")}
      >
        Done
      </button>
    </div>
  );
};

export default FilterTodo;
