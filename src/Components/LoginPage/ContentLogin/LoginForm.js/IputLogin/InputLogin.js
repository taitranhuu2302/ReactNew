import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class InputLogin extends Component {
  render() {
    return (
      <>
        <div className="col-12 text-center">
          <h1 className="text-white">LOG IN</h1>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="w-100 form-control shadow-none rounded"
          />
        </div>
        <div className="col-12">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-100 form-control shadow-none rounded"
          />
        </div>
        <div className="col-12 mt-1">
          <Link to="/login" className="forgot">
            Forgot Password ?
          </Link>
        </div>
        <div className="col-12 mt-4">
          <div className="form-check d-flex align-items-center p-0">
            <input type="checkbox" name="" className="me-2" id="checkbox" />
            <label htmlFor="checkbox" className="text-white">
              Remember Me
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default InputLogin;
