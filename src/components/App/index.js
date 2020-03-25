import React, { Component } from "react";
import Header from "../Header";
import Search from "../Search";
import StatusTodo from "../StatusTodo";
import FilterTodo from "../FilterTodo";
import ListTodo from "../ListTodo";
import "./style.css";
import FormTodo from "../FormTodo";

export default class App extends Component {
  counterId = 100;
  createTodo = text => ({
    id: this.counterId++,
    label: text,
    isImportant: false,
    isDone: false
  });

  state = {
    todos: [
      this.createTodo("drink tea"),
      this.createTodo("learn english"),
      this.createTodo("Make task")
    ],
    query: "",
    filterStatus: "all"
  };
  search = (arr, query) =>
    arr.filter(el => el.label.toLowerCase().includes(query.toLowerCase()));
  toggleProperty = (i, property) => {
    this.setState(({ todos }) => ({
      todos: todos.map(el => {
        el[property] = el.id === i ? !el[property] : el[property];
        return el;
      })
    }));
  };
  onDelete = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(el => el.id !== id)
    }));
  };
  toggleDone = id => {
    this.toggleProperty(id, "isDone");
  };
  toggleMarked = id => {
    this.toggleProperty(id, "isImportant");
  };
  addTodo = text => {
    this.setState(({ todos }) => ({
      todos: [...todos, this.createTodo(text)]
    }));
  };
  filter = (type, arr) => {
    switch (type) {
      case "active":
        return arr.filter(el => !el.isDone);
      case "done":
        return arr.filter(el => el.isDone);
      default:
        return arr;
    }
  };
  onFilter = type => {
    this.setState({
      filterStatus: type
    });
  };
  onSearch = text => {
    this.setState({ query: text });
  };

  render() {
    const { todos, query, filterStatus } = this.state;
    const visibleItems = this.filter(filterStatus, this.search(todos, query));
    const done = visibleItems.filter(el => el.isDone).length;
    const inProgress = visibleItems.length - done;

    return (
      <div className="todo d-flex flex-column">
        <Header />
        <StatusTodo active={inProgress} done={done} />
        <div className="search-panel d-flex justify-content-between">
          <Search onSearch={this.onSearch} />
          <FilterTodo onFilter={this.onFilter} filterStatus={filterStatus} />
        </div>
        <ListTodo
          todos={visibleItems}
          onDelete={this.onDelete}
          toggleDone={this.toggleDone}
          toggleMarked={this.toggleMarked}
        />
        <FormTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
