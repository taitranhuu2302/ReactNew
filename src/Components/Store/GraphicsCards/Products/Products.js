import React, { Component } from "react";
import "./styles.scss";
import Product from "./Product/Product";

class Products extends Component {
  render() {
    return (
      <div className="row row-cols-4 products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default Products;
