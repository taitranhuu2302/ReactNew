import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class Product extends Component {
  render() {
    return (
      <div className="col product-item">
        <div className="bgr">
          <img
            src="https://static.gigabyte.com/StaticFile/Image/Global/dc6d65bfcf598b6ce39dbd9fc0b3ffdb/Product/26609/webp/400"
            alt=""
          />
          <div className="item-caption font-family-Ti">
            AORUS GeForce RTX™ 3090 XTREME WATERFORCE 24G
          </div>
          <div className="button-task">
            <Link to="/Graphics-Card">
              <button className="btn rounded-0 button-link shadow-none me-3 font-family-Ti">
                Learn More
              </button>
            </Link>
            <button className="btn rounded-0 button-add shadow-none font-family-Ti">
              Compare
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
