import React, { Component } from "react";

class AdminProduct extends Component {
  render() {
    var { product } = this.props;
    return (
      <tr>
        <td>{product.id}</td>
        <td>
          <img src={product.image} alt="" />
        </td>
        <td className="fw-bold">{product.name}</td>
        <td className="">
          <span
            onClick={() => this.props.onChangeStatus(product.id)}
            className={
              product.status
                ? "label-status bg-success rounded text-white p-1"
                : "label-status bg-danger rounded text-white p-1"
            }
          >
            {product.status ? "Active" : "Blocked"}
          </span>
        </td>
        <td>
          <button className="btn shadow-none me-3 bg-warning text-white">
            Update
          </button>
          <button
            onClick={() => this.props.onDeleteProduct(product.id)}
            className="btn shadow-none bg-danger text-white"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default AdminProduct;
