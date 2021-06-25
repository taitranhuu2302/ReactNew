import React, { Component } from "react";
import InputLogin from "./IputLogin/InputLogin";
import InputSignIn from "./InputSignIn/InputSignIn";
import "./styles.scss";
import { connect } from "react-redux";
import * as action from "./../../../../Actions/index";

class LoginForm extends Component {
  onChangeLogin = () => {
    this.props.onChangeLogin();
  };

  render() {
    var { changeLogin, match } = this.props;
    var url = match.url;
    var slug = changeLogin ? "register" : "login";
    return (
      <div className="container-fluid px-0 py-5" id="wapper-login">
        <div className="content-box">
          <div className="container-fluid">
            <div className="row">
              {changeLogin ? (
                <InputLogin
                  onChangeLogin={this.onChangeLogin}
                  url={url}
                  slug={slug}
                />
              ) : (
                <InputSignIn
                  onChangeLogin={this.onChangeLogin}
                  url={url}
                  slug={slug}
                />
              )}
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
