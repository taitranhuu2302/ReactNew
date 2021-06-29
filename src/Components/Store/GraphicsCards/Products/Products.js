import React, { Component } from "react";
import "./styles.scss";
import Product from "./Product/Product";
import { connect } from "react-redux";
import * as actions from "./../../../../Actions/index";

class Products extends Component {
  componentDidMount() {
    this.props.acProductsRequest();
  }
  render() {
    var { products } = this.props;
    return (
      <div className="row row-cols-4 products">
        {this.ProductList(products)}
      </div>
    );
  }

  ProductList = (list) => {
    var result = null;

    result = list.map((item, index) => {
      return <Product key={index} item={item} />;
    });

    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    acProductsRequest: () => {
      dispatch(actions.acFetchProductsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
