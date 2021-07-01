import React, { Component } from "react";
import "./styles.scss";
import Product from "./Product/Product";

class Products extends Component {
  render() {
    var { products } = this.props;
    return (
      <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 products">
        {this.ProductList(products)}
      </div>
    );
  }

  ProductList = (list) => {
    var result = null;
    result = list.map((item, index) => {
      return (
        <Product key={index} item={item} onAddToCart={this.props.onAddToCart} />
      );
    });
    return result;
  };
}

export default Products;
