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
              className=" d-none d-lg-block"
            />
            <img className="d-block d-lg-none" src="https://www.aorus.com/image/banner/Performance%20Above%20All-1620383663.jpg" alt="" />
            <div className="slider-item-caption-1 text-center">
              <h2>Performance Above All</h2>
              <p>AORUS & AERO Laptop With 11th Gen Intel Core H-series</p>
              <button className="btn caption-btn rounded-0 shadow-none">
                SEE MORE
              </button>
            </div>
          </div>
          <div className="slider-item">
            <img
              src="https://www.aorus.com/image/banner/Model%20X-1620613780.jpg"
              alt=""
              className=" d-none d-lg-block"
            />
            <img src="https://www.aorus.com/image/banner/Model%20X-1620613784.jpg" alt="" className="d-block d-lg-none" />
            <div className="slider-item-caption-1 text-center">
              <h2>Performance Above All</h2>
              <p>AORUS & AERO Laptop With 11th Gen Intel Core H-series</p>
              <button className="btn caption-btn rounded-0 shadow-none">
                SEE MORE
              </button>
            </div>
          </div>
          <div className="slider-item">
            <img
              src="https://www.aorus.com/image/banner/Outriders-bundle-1620200415.jpg"
              alt=""
              className=" d-none d-lg-block"
            />
            <img src="https://www.aorus.com/image/banner/Outriders-bundle-1620192485.jpg" alt="" className="d-block d-lg-none" />
            <div className="slider-item-caption-1 text-center">
              <h2>Performance Above All</h2>
              <p>AORUS & AERO Laptop With 11th Gen Intel Core H-series</p>
              <button className="btn caption-btn rounded-0 shadow-none">
                SEE MORE
              </button>
            </div>
          </div>
          <div className="slider-item">
            <img
              src="https://www.aorus.com/image/banner/4K%20Pro%20Gaming%20On!-1618310720.jpg"
              alt=""
              className=" d-none d-lg-block"
            />
            <img src="https://www.aorus.com/image/banner/4K%20Pro%20Gaming%20On!-1618278432.jpg" alt="" className="d-block d-lg-none" />
            <div className="slider-item-caption-1 text-center">
              <h2>Performance Above All</h2>
              <p>AORUS & AERO Laptop With 11th Gen Intel Core H-series</p>
              <button className="btn caption-btn rounded-0 shadow-none">
                SEE MORE
              </button>
            </div>
          </div>
          <div className="slider-item">
            <img
              src="https://www.aorus.com/image/banner/How%20to%20build%20a%20PC-1616999865.jpg"
              alt=""
              className=" d-none d-lg-block"
            />
            <img src="https://www.aorus.com/image/banner/How%20to%20build%20a%20PC-1617271762.jpg" alt="" className="d-block d-lg-none" />
            <div className="slider-item-caption-1 text-center">
              <h2>Performance Above All</h2>
              <p>AORUS & AERO Laptop With 11th Gen Intel Core H-series</p>
              <button className="btn caption-btn rounded-0 shadow-none">
                SEE MORE
              </button>
            </div>
          </div>
          <div className="slider-item">
            <img
              src="https://www.aorus.com/image/banner/AORUS%20Gallery-1617163008.jpg"
              alt=""
              className=" d-none d-lg-block"
            />
            <img src="https://www.aorus.com/image/banner/AORUS%20Gallery-1617163014.jpg" alt="" className="d-block d-lg-none" />
            <div className="slider-item-caption-1 text-center">
              <h2>Performance Above All</h2>
              <p>AORUS & AERO Laptop With 11th Gen Intel Core H-series</p>
              <button className="btn caption-btn rounded-0 shadow-none">
                SEE MORE
              </button>
            </div>
          </div>
          <div className="slider-item">
          <img
              src="https://www.aorus.com/image/banner/Z590_THE_BEST_FOR_THE_PRO-1616039837.jpg"
              alt=""
              className=" d-none d-lg-block"
            />
            <img src="https://www.aorus.com/image/banner/Z590_THE_BEST_FOR_THE_PRO-1616053366.jpg" alt="" className="d-block d-lg-none" />
            <div className="slider-item-caption-1 text-center">
              <h2>Performance Above All</h2>
              <p>AORUS & AERO Laptop With 11th Gen Intel Core H-series</p>
              <button className="btn caption-btn rounded-0 shadow-none">
                SEE MORE
              </button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Banner;
