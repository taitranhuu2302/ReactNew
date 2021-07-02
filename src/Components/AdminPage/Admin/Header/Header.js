import React, { Component } from "react";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";
import "./styles.scss";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid" id="header-admin">
        <div className="row align-items-center header-top">
          <HeaderRight />
          <HeaderLeft />
        </div>
      </div>
    );
  }
}

export default Header;
