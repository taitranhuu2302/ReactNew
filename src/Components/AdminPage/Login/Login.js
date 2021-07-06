import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class Login extends Component {
  render() {
    return (
      <div className="container-fluid" id="login-form">
        <div className="login-form-content">
          <div className="row w-100">
            <div className="col">
              <img
                src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
                alt=""
              />
            </div>
            <div className="col text-center form">
              <h2 className="fw-bold mb-5">Member Login</h2>
              <form action="">
                <div className="input-group wapper-input mb-3">
                  <i className="fas fa-envelope" />
                  <input
                    type="email"
                    className="form-control shadow-none "
                    name="email"
                    placeholder="Email"
                    id="email"
                  />
                </div>
                <div className="input-group wapper-input mb-3">
                  <i className="fas fa-lock" />
                  <input
                    type="password"
                    className="form-control shadow-none "
                    name="password"
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <button type="submit" className="btn btn-submit mt-4">
                  LOGIN
                </button>
                <div className="forgot-1 mt-2">
                  <span>
                    Forgot{" "}
                    <Link
                      className="text-decoration-none"
                      to="/admin/login-admin"
                    >
                      Username/{" "}
                    </Link>
                    <Link
                      className="text-decoration-none"
                      to="/admin/login-admin"
                    >
                      Password?
                    </Link>
                  </span>
                </div>
                <Link
                  to="/admin/login-admin"
                  className="create-account d-block mt-5 text-decoration-none"
                >
                  Create your Account <i className="fal fa-arrow-right" />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
