import React, { Component } from "react";
import Header from './../../Components/LoginPage/HeaderLogin/Header/Header'
import Breadcumb from "../../Components/LoginPage/ContentLogin/Breadcumb/Breadcumb";

class LoginPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Breadcumb/>
      </>
    );
  }
}

export default LoginPage;
