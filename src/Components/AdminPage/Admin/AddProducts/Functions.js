import React, { Component } from "react";
import "./styles.scss";
import callApi from "./../../../../utils/apiCaller";
import { connect } from "react-redux";
import * as actions from "./../../../../Actions/index";

class Functions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      des: "",
      image: "",
      status: true,
    };
  }

  componentDidMount() {
    var { match } = this.props;
    var id = match.params.id;
    if (id) {
      callApi(`products/${id}`, "GET", null).then((res) => {
        var product = res.data;
        this.setState({
          id: product.id,
          name: product.name,
          image: product.image,
          status: product.status,
        });
      });
    }
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
    var { history } = this.props;
    var { id, name, price, des, image, status } = this.state;
    var product = {};
    if (id) {
      product = {
        id: id,
        name: name,
        price: price,
        des: des,
        image: image,
        status: status,
      };
      this.props.onUpdateProduct(product);
      history.goBack();
    } else {
      product = {
        name: name,
        price: price,
        des: des,
        image: image,
        status: status,
      };
      this.props.onUpProduct(product);
      history.goBack();
    }
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
              checked={this.state.status}
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
    onUpdateProduct: (product) => {
      dispatch(actions.acUpdateProductRequest(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(Functions);
