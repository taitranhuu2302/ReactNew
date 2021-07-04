import React, { Component } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import * as actions from "./../../../../Actions/index";

class Functions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      des: "",
      image: "",
      status: false,
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    var product = {
      name: this.state.name,
      price: this.state.price,
      des: this.state.des,
      image: this.state.image,
      status: this.state.status,
    };
    // console.log(product);
    // this.props.onUpProduct(this.state);
  };

  render() {
    return (
      <div className="container mt-3" id="functions">
        <div className="title text-center">
          <h2>Add Product</h2>
        </div>
        <form action="" onSubmit={this.onSave} className="form-control">
          <div className="mb-3">
            <label className="label-add" htmlFor="name-product">
              Name:
            </label>
            <input
              type="text"
              id="name-product"
              className="shadow-none form-control"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label className="label-add" htmlFor="price-product">
              Price:
            </label>
            <input
              type="number"
              id="price-product"
              className="shadow-none form-control"
              name="price"
              value={this.state.price}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label className="label-add" htmlFor="description-product">
              Description:
            </label>
            <textarea
              name="description"
              id=""
              className="w-100"
              cols="30"
              rows="10"
              name="des"
              value={this.state.des}
              onChange={this.onChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="label-add" htmlFor="img-product">
              Image Address:
            </label>
            <input
              type="text"
              id="img-product"
              className="shadow-none form-control"
              name="image"
              value={this.state.image}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label className="label-add me-2" htmlFor="status">
              Status
            </label>
            <input
              type="checkbox"
              className=""
              name="status"
              value={this.state.status}
              onChange={this.onChange}
              id="status"
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpProduct: (product) => {
      dispatch(actions.acUpProductRequest(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(Functions);
