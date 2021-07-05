import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="input-group mb-3 search-bar">
        <input type="search" className="form-control" />
        <span className="input-group-text" id="">
          <i className="fas fa-search" />
        </span>
      </div>
    );
  }
}

export default SearchBar;
