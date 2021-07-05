import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <Link
            to={`/admin/${product.id}/edit-product`}
            className="btn shadow-none me-3 mb-3 bg-warning text-white"
          >
            Update
          </Link>
          <button
            onClick={() => this.props.onDeleteProduct(product.id)}
            className="btn shadow-none mb-3 bg-danger text-white"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default AdminProduct;
