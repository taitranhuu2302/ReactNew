import React, { Component } from "react";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";
import "./styles.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNav: false,
    };
  }

  onToggleNav = () => {
    this.setState({
      toggleNav: !this.state.toggleNav,
    });
  };

  render() {
    var { toggleNav } = this.state;
    return (
      <div className="container-fluid" id="header-admin">
        <div className="row align-items-center header-top">
          <HeaderLeft onToggleNav={this.onToggleNav} toggleNav={toggleNav} />
          <HeaderRight />
        </div>
      </div>
    );
  }
}

export default Header;
