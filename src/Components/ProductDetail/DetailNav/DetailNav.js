import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class DetailNav extends Component {
  render() {
    var { sticky } = this.props;
    return (
      <div
        className={
          sticky
            ? "container-fluid detail-nav py-4 sticky"
            : "container-fluid detail-nav py-4"
        }
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 color-orange name-product">
              AORUS GeForce RTX™ 3090 XTREME WATER
            </div>
            <div className="col-lg-6 col-12 nav-list">
              <ul className="nav justify-content-start justify-content-lg-end">
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
