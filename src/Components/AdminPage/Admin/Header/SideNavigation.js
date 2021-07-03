import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideNavigation extends Component {
  render() {
    var { toggleNav } = this.props;
    return (
      <ul
        className={
          toggleNav
            ? "nav active-navigation flex-column side-navigation "
            : "nav flex-column side-navigation"
        }
      >
        <li className="nav-item  justify-content-center  logo w-100">
          <button
            className="btn shadow-none close d-block d-lg-none"
            onClick={() => this.props.onToggleNav()}
          >
            <i className="fas fa-times" />
          </button>
          <Link to="/admin" className="nav-link">
            <img
              src="https://www.aorus.com/assets/img/logo.acad5b52.png"
              alt=""
            />
          </Link>
        </li>
        <li className="nav-item title justify-content-center fw-bold w-100 text-white">
          <span className="font-family-Ad">Functions</span>
        </li>
        <ul className="nav nav-content w-100">
          <li className="nav-item w-100">
            <Link to="/admin" className="nav-link text-decoration-none">
              Add products
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link to="/admin" className="nav-link text-decoration-none">
              Update products
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link to="/admin" className="nav-link text-decoration-none">
              Delete products
            </Link>
          </li>
        </ul>
      </ul>
    );
  }
}

export default SideNavigation;
