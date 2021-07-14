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
          <Link to="/" className="nav-link">
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
              <i className="fas fa-home me-3" />
              Home
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link to="/choose-avatar" className="nav-link text-decoration-none">
              <i className="far fa-id-card me-3" />
              Profile
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link to="/admin/users" className="nav-link text-decoration-none">
              <i className="fas fa-users me-3" />
              Users
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link
              to="/admin/hightcharts"
              className="nav-link text-decoration-none"
            >
              <i className="far fa-chart-bar me-3" />
              HightCharts
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link to="/admin" className="nav-link text-decoration-none">
              <i className="fas fa-table me-3" />
              Basic Table
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link to="/404-error" className="nav-link text-decoration-none">
              <i className="fas fa-exclamation-triangle me-3" />
              Error 404
            </Link>
          </li>
        </ul>
      </ul>
    );
  }
}

export default SideNavigation;
