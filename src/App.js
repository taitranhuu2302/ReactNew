import React, { Component } from "react";
import HeaderPage from "./Pages/HomPage/HeaderPage";
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <HeaderPage />

      </Router>
      </>
    );
  }
}

export default App;
