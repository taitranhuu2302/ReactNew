import React from "react";
import Home from "./../../../Components/AdminPage/Admin/Home";
import Header from "./../../../Components/AdminPage/Header";
import Footer from "./../../../Components/AdminPage/Footer";

export default function HomeContainer() {
  return (
    <div className="bgr-admin">
      <Header />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}
