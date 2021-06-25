import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class InputLogin extends Component {
  render() {
    var { url, slug } = this.props;

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
            name="email"
            className="w-100 form-control border-0 shadow-none rounded"
          />
        </div>
        <div className="col-12">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-100 form-control border-0 shadow-none rounded"
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
        <div className="col-12 my-4">
          <div className="row align-items-center">
            <div className="col-sm-6 col-12 mb-3 text-center text-sm-end">
              <div className="text-white label-in-width">Or Log in with</div>
            </div>
            <div className="col-sm-6 col-12 text-center">
              <Link to="/" className="icon text-center">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="/" className="icon text-center">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/" className="icon text-center">
                <i className="fab fa-google-plus-g"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-7 mt-2 text-center">
              <Link to={`${url}/${slug}`}>
                <button
                  onClick={this.props.onChangeLogin}
                  className="btn shadow-none button-create w-100 text-white"
                >
                  Create An Account
                </button>
              </Link>
            </div>
            <div className="col-12 col-sm-5 mt-2 text-center ">
              <button className="btn shadow-none button-login w-100 text-white">
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InputLogin;
