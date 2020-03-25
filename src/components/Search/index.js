import React, { Component } from "react";

export default class Search extends Component {
  state = {
    searchQuery: ""
  };
  searchHandler = e => {
    this.setState({ searchQuery: e.target.value });
    this.props.onSearch(e.target.value);
  };
  render() {
    return (
      <input
        onChange={this.searchHandler}
        value={this.state.searchQuery}
        type="text"
        className="form-control"
        placeholder="Type to search"
      />
    );
  }
}
