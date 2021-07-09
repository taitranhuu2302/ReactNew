import React, { Component } from "react";
import "./styles.scss";
import DetailNav from "./DetailNav/DetailNav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class ProductDetail extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container-fluid p-0" id="detail-product">
        <DetailNav />
        <div className="slides-detail">
          <div className="slide-item">
            <video
              loop
              autoPlay
              muted
              src="assets\video\30903080waterforce.mp4"
              className="d-xl-block d-none"
            ></video>
            <img
              src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/kv-img-rwd.jpg"
              alt=""
              className="d-block d-xl-none"
            />
          </div>
          <div className="slide-item ">
            <img
              className="bgr-image"
              src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/kf-img-bg.jpg"
              alt=""
            />
            <Slider {...settings} className="crs-list">
              <div className="item">
                <div className="row h-100 p-0">
                  <div className="col  flex flex-column item-img col-text">
                    <div className="mb-3">
                      <img
                        src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/title-line.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h3>KEY FEATURE</h3>
                      <div>
                        <p className="m-0">
                          NVIDIA Ampere Streaming Multiporcessors
                        </p>
                        <p className="m-0">2nd Generation RT Cores</p>
                        <p className="m-0">3rd Generation Tensor Cores </p>
                        <p className="m-0">Powered by GeForce RTX™ 3090 </p>
                        <p className="m-0">
                          Integrated with 24GB GDDR6X 384-bit memory interface
                        </p>
                        <p className="m-0">
                          WATERFORCE all-in-one cooling system{" "}
                        </p>
                        <p className="m-0">
                          240mm radiator with 2x 120mm ARGB fans{" "}
                        </p>
                        <p className="m-0">RGB Fusion 2.0 </p>
                        <p className="m-0">6 Outputs </p>
                        <p className="m-0">Protection metal back plate </p>
                        <p className="m-0">
                          4 Years Warranty (Online registration required){" "}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3>CORE CLOCK</h3>
                      <div className="icon-logo d-flex">
                        <img
                          src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/waterforce.png"
                          alt=""
                        />
                        <img
                          src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/4years.png"
                          alt=""
                        />
                        <img
                          src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/nv-rtx.jpg"
                          alt=""
                        />
                        <img
                          src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/rgb-logo.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col item-img">
                    <img
                      src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/kf-img.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
