import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class DetailNav extends Component {
  render() {
    return (
      <div className="container-fluid detail-nav">
        <div className="container">
          <div className="row align-items-center">
            <div className="col color-orange name-product">
              AORUS GeForce RTX™ 3090 XTREME WATER
            </div>
            <div className="col nav-list">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link to="/product" className="nav-link ">
                    Key Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link ">
                    Specification
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link ">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link ">
                    Buy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailNav;
