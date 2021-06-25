import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class InputSignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {},
      err: {
        email: "",
        username: "",
        password: "",
        repassword: "",
      },
    };
  }

  onChange = (e) => {
    var { info } = this.state;
    var target = e.target;
    var name = target.name;
    var value = target.value;

    info[name] = value;

    this.setState({
      info,
    });
  };

  onRegister = () => {
    var { info, err } = this.state;
    // Check Email
    if (
      !info.email ||
      info.email.lastIndexOf("@") === -1 ||
      info.email.lastIndexOf(".") === -1
    ) {
      err.email = "The Email must be a valid email address";
    } else err.email = "";

    // Check Username
    if (!info.username) {
      err.username = "The nickname field is required";
    } else err.username = "";

    //Check Password
    if (!info.password) {
      err.password = `Password must be 8 to 20 characters, with a least one numeric
      character [0-9] and one letter. Space is not allowed.`;
    } else err.password = "";

    //Check Re-Password
    if (!info.repassword) {
      err.repassword = "The Re-Password field is requied";
    } else if (info.repassword !== info.password) {
      err.repassword = "Re-Password does not match";
    } else err.repassword = "";
  };

  render() {
    var { url, slug } = this.props;
    var { err } = this.state;
    console.log(err.email);
    return (
      <>
        <div className="col-12 text-center">
          <h1 className="text-white">CREATE YOUR ACCOUNT</h1>
        </div>
        <div className="col-12 input-regis">
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            className="w-100 form-control border-0 shadow-none rounded"
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            The email will be you login ID or GIGABYTE AORUS Account.
          </p>
        </div>
        <div className="col-12 input-regis">
          <label htmlFor="username">NickName*</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            className="w-100 form-control border-0 shadow-none rounded"
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            Nickname must be widthin 30 characters
          </p>
        </div>
        <div className="col-12 input-regis">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            className="w-100 form-control border-0 shadow-none rounded"
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            Password must be 8 to 20 characters, with a least one numeric
            character [0-9] and one letter. Space is not allowed.
          </p>
        </div>
        <div className="col-12 input-regis">
          <label htmlFor="re-password">Re-enter password*</label>
          <input
            type="password"
            id="re-password"
            name="repassword"
            value={this.state.repassword}
            onChange={this.onChange}
            className="w-100 form-control border-0 shadow-none rounded"
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            Passwords must match.
          </p>
        </div>
        <div className="col-12 my-4">
          <div className="row align-items-center">
            <div className="col-sm-6 col-12 mb-3 text-center text-sm-end">
              <div className="text-white label-in-width">Or Log in with</div>
            </div>
            <div className="col-sm-6 col-12 text-center">
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
        {/* <div className="col-12 mb-4 py-2 color-orange active-border font-family-Ti">
          asdoijaoisdjio
        </div> */}
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-7 mt-2 text-center">
              <Link to={`${url}/${slug}`}>
                <button
                  onClick={this.props.onChangeLogin}
                  className="btn shadow-none button-create w-100 text-white"
                >
                  I'm already a member
                </button>
              </Link>
            </div>
            <div className="col-12 col-sm-5 mt-2 text-center ">
              <button
                className="btn shadow-none button-login w-100 text-white"
                onClick={this.onRegister}
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InputSignIn;
