import React, { Component } from "react";
import HeaderPage from "./Pages/HeaderPage";
import Banner from "./Pages/HomPage/Banner";

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <HeaderPage />
          <Banner />
        </Router>
      </>
    );
  }
}

export default App;
