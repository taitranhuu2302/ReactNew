import React, { Component } from "react";

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      keyword: "",
    }

  }

  render() {
    return (
      <div className="input-group mb-3 search-bar">
        <input type="search" className="form-control rounded input-search" />
        <button className="btn  btn-search fas fa-search"/>
      </div>
    );
  }
}

export default SearchBar;
