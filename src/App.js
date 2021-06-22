import React, { Component, Fragment } from "react";
import HeaderPage from "./Pages/HeaderPage";
import BannerPage from "./Pages/HomePage/BannerHome";
import GearHome from "./Pages/HomePage/GearHome";
import { BrowserRouter as Router } from "react-router-dom";
import ExploreHome from "./Pages/HomePage/ExploreHome";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <HeaderPage />
          <BannerPage />
          <GearHome />
          <ExploreHome />
        </Router>
      </Fragment>
    );
  }
}

export default App;
