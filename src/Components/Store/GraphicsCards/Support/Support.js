import React, { Component } from "react";
import "./styles.scss";

class Support extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 support-div">
            <div className="row row-cols-3 box">
              <div className="col item"></div>
              <div className="col item"></div>
              <div className="col item"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
