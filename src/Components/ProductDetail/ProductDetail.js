import React, { Component } from "react";
import "./styles.scss";
import DetailNav from "./DetailNav/DetailNav";
import SliderDetail from "./Slider/SliderDetail";
import Robot from "./Robot/Robot";

class ProductDetail extends Component {
  render() {
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
            <SliderDetail list={listSlider} />
          </div>
          <div className="slide-item">
            <Robot />
          </div>
        </div>
      </div>
    );
  }
}

const listSlider = [
  {
    titleTop: "KEY FEATURE",
    listCaption: [
      "NVIDIA Ampere Streaming Multiporcessors",
      "2nd Generation RT Cores",
      "3rd Generation Tensor Cores",
      "Powered by GeForce RTX™ 3090",
      "Integrated with 24GB GDDR6X 384-bit memory interface",
      "WATERFORCE all-in-one cooling system",
      "240mm radiator with 2x 120mm ARGB fans",
      "RGB Fusion 2.0",
      "6 Outputs",
      "Protection metal back plate",
      "4 Years Warranty (Online registration required)",
    ],
    titleBottom: "CORE CLOCK",
    listIcon: [
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/waterforce.png",
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/4years.png",
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/nv-rtx.jpg",
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/logo/rgb-logo.png",
    ],
    imageTitle:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/kf-img.png",
  },
  {
    titleTop: "NVIDIA Ampere Architecture",
    listCaption: [
      "The all-new NVIDIA Ampere architecture delivers the ultimate play, featuring advanced 2nd generation Ray Tracing Cores and 3rd generation Tensor Cores with greater throughput.",
    ],
    titleBottom: "",
    listIcon: [],
    imageTitle:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/slide-img-1.jpg",
  },
  {
    titleTop: "RTX. IT’S ON.",
    listCaption: [
      "Experience today’s biggest blockbusters like never before with the visual fidelity of real-time ray tracing and the ultimate performance of AI-powered DLSS.",
    ],
    titleBottom: "",
    listIcon: [],
    imageTitle:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/slide-img-2.jpg",
  },
  {
    titleTop: "VICTORY MEASURED IN MILLISECONDS",
    listCaption: [
      "NVIDIA Reflex delivers the ultimate competitive advantage. The lowest latency. The best responsiveness. Powered by GeForce RTX 30 Series GPUs and NVIDIA® G-SYNC® monitors. Acquire targets faster, react quicker, and increase aim precision through a revolutionary suite of technologies to measure and optimize system latency for competitive games.",
    ],
    titleBottom: "",
    listIcon: [],
    imageTitle:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/slide-img-4.jpg",
  },
  {
    titleTop: "VICTORY MEASURED IN MILLISECONDS",
    listCaption: [
      "Take your creative projects to a new level with GeForce RTX 30 Series GPUs. Delivering AI-acceleration in top creative apps. Backed by the NVIDIA Studio platform of dedicated drivers and exclusive tools. And built to perform in record time. Whether you’re rendering complex 3D scenes, editing 8K video, or livestreaming with the best encoding and image quality, GeForce RTX GPUs give you the performance to create your best.",
    ],
    titleBottom: "",
    listIcon: [],
    imageTitle:
      "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1682/innergigabyteimages/slide-img-5.jpg",
  },
];

export default ProductDetail;
