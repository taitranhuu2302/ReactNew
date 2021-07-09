import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class HeaderRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
  }

  logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    localStorage.removeItem("uid");
    this.setState({ check: true });
  };

  render() {
    var { check } = this.state;
    var { avatar } = this.props;
    if (check) {
      return <Redirect to="/login-admin" />;
    }
    return (
      <>
        <div className="col-lg-6 col-4 header-right">
          <ul className="nav justify-content-end  align-items-center">
            <li className="nav-item text-center p-1">
              <button className="btn shadow-none fas fa-bell rounded-circle p-0"></button>
            </li>
            <li className="nav-item ms-3">
              <button className="btn shadow-none avatar rounded-circle p-0">
                <img
                  src={
                    avatar
                      ? avatar
                      : "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
                  }
                  alt=""
                />
              </button>
              <ul className="nav menu-sub ">
                <li className="sub-item">
                  <Link to={`/choose-avatar`} className="btn shadow-none">
                    <i className="far fa-user text-dark me-2" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li className="sub-item">
                  <button className="btn shadow-none">
                    <i className="far fa-cog text-dark me-2" />
                    <span>Settings</span>
                  </button>
                </li>
                <li className="sub-item">
                  <button className="btn shadow-none" onClick={this.logOut}>
                    <i className="far fa-sign-out-alt text-dark me-2" />
                    <span>Log out</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default HeaderRight;
