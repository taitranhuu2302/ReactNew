import React, { Component, Fragment } from "react";
import Banner from "./../../Components/Banner/Banner";
import GearSlide from "../../Components/GearSlide/GearSlide";
import Explore from "../../Components/ExploreSlide/Explore";
import Join from "./../../Components/JoinLogin/join";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <GearSlide />
        <Explore />
        <Join />
      </Fragment>
    );
  }
}
