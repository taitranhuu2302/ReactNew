import React, { Component } from "react";
import { Link } from "react-router-dom";

class FilterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: 0,
    };
  }

  onFilter = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { filterName, filterStatus } = this.state;
    return (
      <tr className="filter-table">
        <td></td>
        <td></td>
        <td>
          <input
            type="text"
            className="w-100 rounded  form-control"
            name="filterName"
            value={filterName}
            onChange={this.onFilter}
          />
        </td>
        <td>
          <select
            className="form-control"
            value={filterStatus}
            onChange={this.onFilter}
            name="filterStatus"
          >
            <option value={0}>Tất Cả</option>
            <option value={-1}>Ẩn</option>
            <option value={1}>Kích Hoạt</option>
          </select>
        </td>
        <td>
          <Link
            to="/admin/add-products"
            className="btn add-product bg-primary text-white"
          >
            Add Product
          </Link>
        </td>
      </tr>
    );
  }
}

export default FilterTable;
