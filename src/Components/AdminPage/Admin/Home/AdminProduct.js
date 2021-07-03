import React, { Component } from "react";

class AdminProduct extends Component {
  render() {
    var { product, index } = this.props;
    return (
      <tr>
        <td>{product.id}</td>
        <td>
          <img src={product.image} alt="" />
        </td>
        <td className="fw-bold">{product.name}</td>
        <td className="">
          <span className="label-status bg-success rounded text-white p-1">
            {product.status ? "Stocking" : "Sold out"}
          </span>
        </td>
        <td>
          <button className="btn shadow-none me-3 bg-danger text-white">
            Delete
          </button>
          <button className="btn shadow-none bg-warning text-white">
            Update
          </button>
        </td>
      </tr>
    );
  }
}

export default AdminProduct;
