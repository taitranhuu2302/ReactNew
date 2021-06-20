import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

class Banner extends Component {
  render() {
    return (
      <div className="container-fluid p-0 " id="banner">
        <Slider {...settings}>
          <div className="slider-item">
            <img
              src="https://www.aorus.com/image/banner/Performance%20Above%20All-1620383654.jpg"
              alt=""
            />
            <div className="slider-item-caption-1 text-center">
              <h2>Performance Above All</h2>
              <p>AORUS & AERO Laptop With 11th Gen Intel Core H-series</p>
              <button className="btn caption-btn rounded-0 shadow-none">
                SEE MORE
              </button>
            </div>
          </div>
          <div className="slider-item">
            <h3>2</h3>
          </div>
          <div className="slider-item">
            <h3>3</h3>
          </div>
          <div className="slider-item">
            <h3>4</h3>
          </div>
          <div className="slider-item">
            <h3>5</h3>
          </div>
          <div className="slider-item">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Banner;
