import React, { Component } from "react";
import Header from "./../../Components/LoginPage/HeaderLogin/Header/Header";
import Breadcumb from "../../Components/LoginPage/ContentLogin/Breadcumb/Breadcumb";
import LoginForm from "../../Components/LoginPage/ContentLogin/LoginForm.js/LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Breadcumb />
        <LoginForm />
      </>
    );
  }
}

export default LoginPage;
