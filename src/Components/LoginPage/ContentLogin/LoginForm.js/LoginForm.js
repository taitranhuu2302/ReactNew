import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputLogin from "./IputLogin/InputLogin";
import InputSignIn from "./InputSignIn/InputSignIn";
import "./styles.scss";

class LoginForm extends Component {
  render() {
    return (
      <div className="container-fluid px-0 py-5" id="wapper-login">
        <div className="content-box">
          <div className="container-fluid">
            <div className="row">
              {/* <InputLogin /> */}
              <InputSignIn />
              <div className="col-12 my-4">
                <div className="row align-items-center">
                  <div className="col text-end">
                    <div className="text-white label-in-width">
                      Or Log in with
                    </div>
                  </div>
                  <div className="col">
                    <Link className="icon text-center">
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="icon text-center">
                      <i class="fab fa-twitter"></i>
                    </Link>
                    <Link className="icon text-center">
                      <i class="fab fa-google-plus-g"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12 col-sm-6 mt-2 text-center">
                    <button className="btn shadow-none button-create w-100 text-white">
                      Create An Account
                    </button>
                  </div>
                  <div className="col-12 col-sm-6 mt-2 text-center ">
                    <button className="btn shadow-none button-login w-75 text-white">
                      LOG IN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
