import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderRight extends Component {
  render() {
    return (
      <>
        <div className="col">
          <ul className="nav align-items-center">
            <li className="nav-item">
              <button className="btn shadow-none far fa-bars size-18"></button>
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
      </>
    );
  }
}

export default HeaderRight;
