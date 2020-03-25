import React, { Component } from "react";

export default class FormTodo extends Component {
  state = {
    currentValue: ""
  };
  setValue = e => {
    this.setState({ currentValue: e.target.value });
  };
  addTodoHandler = e => {
    e.preventDefault();
    if (this.state.currentValue) {
      this.props.addTodo(this.state.currentValue);
      this.setState({
        currentValue: ""
      });
    }
  };
  render() {
    return (
      <form className="d-flex form-todo" onSubmit={this.addTodoHandler}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter new task"
          value={this.state.currentValue}
          onChange={this.setValue}
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
