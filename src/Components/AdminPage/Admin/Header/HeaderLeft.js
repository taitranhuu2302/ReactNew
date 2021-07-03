import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideNavigation from "./SideNavigation";

class HeaderLeft extends Component {
  render() {
    var { toggleNav } = this.props;
    return (
      <div className="col-lg-6 col-8 h-100 header-left p-0">
        <div className="row h-100 align-items-center d-flex d-lg-none">
          <div className="col">
            <button
              onClick={() => this.props.onToggleNav()}
              className="btn shadow-none far fa-bars size-18"
            ></button>
          </div>
          <div className="col">
            <img
              src="https://logodix.com/logo/1789832.png"
              className="logo-sm"
              alt=""
            />
          </div>
        </div>
        <SideNavigation
          onToggleNav={this.props.onToggleNav}
          toggleNav={toggleNav}
        />
        <ul
          className={
            toggleNav
              ? "nav menu h-100 margin-left align-items-center d-lg-flex d-none"
              : "nav menu h-100 align-items-center d-lg-flex d-none"
          }
        >
          <li className="nav-item">
            <button
              onClick={() => this.props.onToggleNav()}
              className="btn shadow-none far fa-bars size-18"
            ></button>
          </li>
          <li className="nav-item">
            <Link className="text-decoration-none" to="/admin">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-decoration-none" to="/admin/users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-decoration-none" to="/admin">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default HeaderLeft;
