import React, { Component } from "react";
import InputLogin from "./IputLogin/InputLogin";
import "./styles.scss";
import { connect } from "react-redux";
import * as action from "./../../../../Actions/index";

class LoginForm extends Component {
  onChangeLogin = () => {
    this.props.onChangeLogin();
  };
  onLogged = (data) => {
    this.props.onLogged(data);
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
              <InputLogin
                onChangeLogin={this.onChangeLogin}
                url={url}
                slug={slug}
                logged={this.props.logged}
                onLogged={this.onLogged}
                history={this.props.history}
              />
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
    logged: state.logged,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeLogin: () => {
      dispatch(action.onChangeLogin());
    },
    onLogged: (username) => {
      dispatch(action.acOnLogged(username));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
