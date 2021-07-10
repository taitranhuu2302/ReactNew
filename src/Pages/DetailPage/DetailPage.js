import React, { Component, Fragment } from "react";
import ProductDetail from "./../../Components/ProductDetail/ProductDetail";
import Header from "./../../Components/LoginPage/HeaderLogin/Header/Header";
import Breadcumb from "./../../Components/LoginPage/ContentLogin/Breadcumb/Breadcumb";
import Footer from "./../../Components/HomePage/Footer/Footer";
import Specification from "../../Components/ProductDetail/Specification/Specification";

class DetailPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Breadcumb
          to="/"
          toBack="Home"
          to1="/GraphicsCard"
          toBack1="Graphics Cards"
          current="AORUS GeForce RTX™ 3090 XTREME WATERFORCE 24G"
          bgr="bgr-black"
        />
        <ProductDetail />
        <Footer />
      </Fragment>
    );
  }
}

const routes = [
  {
    path: '/product/KeyFeatures',
    exact: false,
    main: () => <ProductDetail />
  },
  {
    path: '/product/Specification',
    exact: false,
    main: () => <Specification />
  },
]

export default DetailPage;
