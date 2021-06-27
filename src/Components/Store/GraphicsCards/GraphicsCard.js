import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { Link } from "react-router-dom";

class GraphicsCard extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container-fluid" id="graphics-card">
        <div className="container-fluid title">
          <div className="container">
            <h2 className="text-center">GRAPHICS CARDS</h2>
            <Slider {...settings} className="slides">
              {this.showGraphicCardList(listCard)}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
  showGraphicCardList = (arr) => {
    var result = null;

    result = arr.map((item, index) => {
      return (
        <div key={index} className="slide-item">
          <div className="text-decoration-none bgr" to="/">
            <div className="img">
              <Link to={item.to}>
                <img src={item.image} className="w-100 img-fluid" alt="" />
              </Link>
            </div>
            <div className="slide-title">{item.name}</div>
          </div>
        </div>
      );
    });

    return result;
  };
}
const listCard = [
  {
    to: "/GraphicsCard",
    name: "AORUS",
    image: "https://www.aorus.com/assets/img/graphics-cards-aorus.58760d9d.png",
  },
  {
    to: "/GraphicsCard",
    name: "NVIDIA SERIES",
    image:
      "https://www.aorus.com/assets/img/graphics-cards-nvidia.7025d4f5.png",
  },
  {
    to: "/GraphicsCard",
    name: "AMD SERIES",
    image: "https://www.aorus.com/assets/img/graphics-cards-amd.4c5818ab.png",
  },
];

export default GraphicsCard;
