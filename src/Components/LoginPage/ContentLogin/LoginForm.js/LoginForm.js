import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputLogin from "./IputLogin/InputLogin";
import InputSignIn from "./InputSignIn/InputSignIn";
import "./styles.scss";
import { connect } from "react-redux";
import * as action from "./../../../../Actions/index";

class LoginForm extends Component {
  onChangeLogin = () => {
    var { changeLogin } = this.props;
    this.props.onChangeLogin();
    console.log(changeLogin);
  };

  render() {
    var { changeLogin, match } = this.props;
    console.log(changeLogin);
    var url = match.url;
    var slug = changeLogin ? "register" : "login";
    return (
      <div className="container-fluid px-0 py-5" id="wapper-login">
        <div className="content-box">
          <div className="container-fluid">
            <div className="row">
              {changeLogin ? <InputLogin /> : <InputSignIn />}
              <div className="col-12 my-4">
                <div className="row align-items-center">
                  <div className="col text-end">
                    <div className="text-white label-in-width">
                      Or Log in with
                    </div>
                  </div>
                  <div className="col">
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
                        onClick={this.onChangeLogin}
                        className="btn shadow-none button-create w-100 text-white"
                      >
                        {changeLogin
                          ? "Create An Account"
                          : "I'm already a member"}
                      </button>
                    </Link>
                  </div>
                  <div className="col-12 col-sm-5 mt-2 text-center ">
                    <button className="btn shadow-none button-login w-75 text-white">
                      {changeLogin ? "LOG IN" : "NEXT"}
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

const mapStateToProps = (state) => {
  return {
    changeLogin: state.changeLogin,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeLogin: () => {
      dispatch(action.onChangeLogin());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
