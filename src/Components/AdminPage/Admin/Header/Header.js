import React, { Component } from "react";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";
import { connect } from "react-redux";
import * as actions from "./../../../../Actions";
import callApi from "./../../../../utils/apiCaller";
import "./styles.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNav: false,
      avatar: "",
    };
  }

  componentDidMount() {
    this.props.onGetUsers();
    var { match } = this.props;
    var id = match.params.id;
    if (id) {
      callApi(`usersAdmin/${id}`, "GET", null).then((res) => {
        var user = res.data;
        console.log(res);
        this.setState({
          avatar: user.avatar,
        });
      });
    }
  }

  findIndex = (item, list) => {
    var result = -1;
    list.forEach((user, index) => {
      console.log(user.email);
      if (user.email === item) {
        console.log(index);
        return (result = index);
      }
    });

    return result;
  };

  onToggleNav = () => {
    this.setState({
      toggleNav: !this.state.toggleNav,
    });
  };

  render() {
    var { toggleNav, avatar } = this.state;
    var { match } = this.props;
    var id = match.params.id;
    return (
      <div className="container-fluid" id="header-admin">
        <div className="row align-items-center header-top">
          <HeaderLeft onToggleNav={this.onToggleNav} toggleNav={toggleNav} />
          <HeaderRight avatar={avatar} id={id} history={this.props.history} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersAdmin,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetUsers: () => {
      dispatch(actions.acGetUserAdminRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
