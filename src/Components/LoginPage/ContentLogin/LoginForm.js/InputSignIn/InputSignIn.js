import React, { Component } from "react";

class InputSignIn extends Component {
  render() {
    return (
      <>
        <div className="col-12 text-center">
          <h1 className="text-white">CREATE YOUR ACCOUNT</h1>
        </div>
        <div className="col-12">
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            id="email"
            className="w-100 form-control shadow-none rounded"
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            The email will be you login ID or GIGABYTE AORUS Account.
          </p>
        </div>
        <div className="col-12">
          <label htmlFor="username">NickName*</label>
          <input
            type="text"
            id="username"
            className="w-100 form-control shadow-none rounded"
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            Nickname must be widthin 30 characters
          </p>
        </div>
        <div className="col-12">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            className="w-100 form-control shadow-none rounded"
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            Password must be 8 to 20 characters, with a least one numeric
            character [0-9] and one letter. Space is not allowed.
          </p>
        </div>
        <div className="col-12">
          <label htmlFor="re-password">Re-enter password*</label>
          <input
            type="password"
            id="re-password"
            className="w-100 form-control shadow-none rounded"
          />
          <p className="color-orange size-14 mt-1 font-family-Ti">
            Passwords must match.
          </p>
        </div>
      </>
    );
  }
}

export default InputSignIn;
