import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { connect } from "react-redux";
import * as action from "./../../../../Actions/index";

class Breadcumb extends Component {
  onChangeLogin = () => {
    this.props.onChangeLogin();
  };

  render() {
    var { changeLogin, match } = this.props;
    var url = match.url;
    var slug = changeLogin ? "register" : "login";
    return (
      <div className="container-fluid" id="breadcumb">
        <div className="container h-100">
          <nav aria-label="breadcrumb" className="h-100">
            <ol
              className="breadcrumb"
              className="h-100 align-items-center d-flex"
            >
              <li className="breadcrumb-item">
                {changeLogin ? (
                  <Link to="/">HOME</Link>
                ) : (
                  <Link to={`${url}/${slug}`} onClick={this.onChangeLogin}>
                    My Acounnt
                  </Link>
                )}
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {changeLogin ? "LOG IN " : "CREATE YOUR ACCOUNT"}
              </li>
            </ol>
          </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Breadcumb);
