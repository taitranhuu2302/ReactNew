import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class AdminProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
    };
  }

  checkCategory = () => {
    var { product } = this.props;
    var result = null;
    if (product.aorus) {
      result = "AORUS";
    } else if (product.nvidia) {
      result = "NVIDIA";
    } else {
      result = "AMD";
    }
    return result;
  };

  checkClassCategory = (aorus, nvidia, amd) => {
    var result = null;
    if (aorus) {
      result = "bgr-aorus rounded text-white p-1";
    } else if (nvidia) {
      result = "bgr-nvidia rounded text-white p-1";
    } else {
      result = "bgr-amd rounded text-white p-1";
    }
    return result;
  };

  render() {
    var { product } = this.props;
    return (
      <tr>
        <td className="text-center">{product.id}</td>
        <td className="text-center">
          <img src={product.image} alt="" />
        </td>
        <td className="text-center" className="fw-bold">
          {product.name}
        </td>
        <td className="text-center">
          <span
            className={this.checkClassCategory(
              product.aorus,
              product.nvidia,
              product.amd
            )}
          >
            {this.checkCategory()}
          </span>
        </td>
        <td className="text-center">
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

        <td className="text-center">
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
        <td className="">
          <Typography variant="subtitle1" className="fw-bold">
            {product.updated_at}
          </Typography>
          <Typography variant="body2" className="">
            {moment(product.updated_at).fromNow()}
          </Typography>
        </td>
      </tr>
    );
  }
}

export default AdminProduct;
