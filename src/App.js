import React, { Component } from "react";
import HeaderPage from "./Pages/HeaderPage";
import BannerPage from "./Pages/HomePage/BannerHome";

import { BrowserRouter as Router } from "react-router-dom";
import GearHome from "./Pages/HomePage/GearHome";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <HeaderPage />
          <BannerPage />
          <GearHome />
        </Router>
      </>
    );
  }
}

export default App;
