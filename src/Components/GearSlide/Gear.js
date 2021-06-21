import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles.scss";

class Gear extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    };
    return (
      <div className="container-fluid slide-gear p-0">
        <div className="row w-100">
          <div className="col-12 caption-title text-center">
            <h1>GAMING GEARS</h1>
            <p>
              AORUS is a world leading brand in high-performance motherboards,
              graphic cards, laptops gaming hardware and systems. We are
              passionate about teaming up with gamers to fearlessly challenge
              the limits and win ultimate glory.
            </p>
          </div>
          <div className="col-12">
            <Slider {...settings}>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Gear;
