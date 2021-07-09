import React, { Component } from "react";
import "./styles.scss";

class Robot extends Component {
  render() {
    return (
      <div className="row robot-bgr">
        <div className="col-4 col-text d-flex flex-column">
          <img
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/title-line.png"
            alt=""
            className="line-image mb-3"
          />
          <h3>DESIGN CONCEPT</h3>
          <p className="font-family-Ti">
            In the AORUS dimension, everything is constructed digitally. The
            lighting and patterns are mapped onto the products with an
            efficient, free flowing style. Welcome to the Digital Code Era.
          </p>
          <div className="bgr-text-gradient"></div>
        </div>
        <div className="col-8 concept-robot">
          <img
            className="image-robot"
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/designConcept/1.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Robot;
