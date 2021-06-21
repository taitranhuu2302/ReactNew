import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import NavSub from "./NavSub";

const subMenuProducts = [
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Motherboard.18fe2f57.png",
    label: "MOTHERBOARD",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Graphics.6ca7d8bf.png",
    label: "GRAPHICS CARDS",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Laptop.e77d5ad1.png",
    label: "LAPTOPS",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Monitor.b4e0aada.png",
    label: "MONITORS",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Desktop-PC.ab83c481.png",
    label: "DESKTOP PC",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Peripherals.9f53da7d.png",
    label: "PC PERIPHERALS",
  },
  {
    to: "/",
    image: "https://www.aorus.com/assets/img/Components.9dcdfdc0.png",
    label: "PC COMPONENTS",
  },
];

const subMenuExplore = [
  {
    to: "/",
    label: "NEWS",
  },
  {
    to: "/",
    label: "EVENTS",
  },
  {
    to: "/",
    label: "BLOG",
  },
  {
    to: "/",
    label: "WALLPAPER",
  },
];

const subMenuService = [
  {
    to: "/",
    label: "WARRANTY INFORMATION",
  },
  {
    to: "/",
    label: "PRODUCT REGISTRATION",
  },
];

const subMenuMember = [
  {
    to: "/",
    label: "WHY JOIN?",
  },
  {
    to: "/",
    label: "MEMBERSHIP LEVELS",
  },
  {
    to: "/",
    label: "AORUS POINTS & REWADS",
  },
  {
    to: "/",
    label: "ACHIVEMENT BAGGES",
  },
  {
    to: "/",
    label: "MEMBER LEADERBOARD",
  },
  {
    to: "/",
    label: "MEMBER FAQS",
  },
];

class HeaderRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCanvas: false,
    };
  }

  toggleCanvas = () => {
    this.setState({
      toggleCanvas: !this.state.toggleCanvas,
    });
  };

  navSub = (list) => {
    var result = null;
    result = list.map((item, index) => {
      return <NavSub item={item} key={index} />;
    });
    return result;
  };

  subCanvas = (list) => {
    var result = null;
    result = list.map((item, index) => {
      return (
        <Link to={item.to} key={index}>
          {item.label}
        </Link>
      );
    });
    return result;
  };

  render() {
    var { toggleCanvas } = this.state;
    return (
      <Fragment>
        <div>
          <button
            onClick={this.toggleCanvas}
            className="btn text-white fs-5 shadow-none d-block d-xl-none far fa-bars"
          ></button>
          <div
            className={
              toggleCanvas ? "menu-canvas canvas-active" : "menu-canvas"
            }
          >
            <div className="canvas-header d-flex ms-2 mb-4 align-items-center">
              <button
                onClick={this.toggleCanvas}
                className="btn text-white shadow-none canvas-close fas fa-times"
              ></button>
            </div>
            <div className="canvas-content">
              <ul className="list">
                <li className="list-item mb-2">
                  <div className="item-title">
                    <span>PRODUCTS</span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="sub-menu d-flex flex-column">
                    {this.subCanvas(subMenuProducts)}
                  </div>
                </li>
                <li className="list-item mb-2">
                  <div className="item-title">
                    <span>EXPLORE</span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="sub-menu d-flex flex-column">
                    {this.subCanvas(subMenuExplore)}
                  </div>
                </li>
                <li className="list-item mb-2">
                  <div className="item-title">
                    <span>SERVICE</span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="sub-menu d-flex flex-column">
                    {this.subCanvas(subMenuService)}
                  </div>
                </li>
                <li className="list-item mb-2">
                  <div className="item-title">
                    <span>MEMEBERSHIP</span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="sub-menu d-flex flex-column">
                    {this.subCanvas(subMenuMember)}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar">
          <Link to="/" className="navbar-brand">
            <img
              src="https://www.aorus.com/assets/img/logo.acad5b52.png"
              className="logo"
              alt=""
            />
          </Link>
        </div>
        <ul className="nav h-100 d-none d-xl-flex">
          <li className="nav-item">
            <div className="nav-link nav-title">
              <span>PRODUCTS</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="wrapper-drop container-fluid">
              <ul className="nav nav-drop justify-content-center">
                {this.navSub(subMenuProducts)}
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link nav-title">
              <span>EXPRLORE</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            <ul className="nav sub-menu nav-drop flex-column">
              {this.navSub(subMenuExplore)}
            </ul>
          </li>
          <li className="nav-item">
            <div className="nav-link nav-title">
              <span>SERVICE</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            <ul className="nav sub-menu nav-drop flex-column">
              {this.navSub(subMenuService)}
            </ul>
          </li>
          <li className="nav-item">
            <div className="nav-link nav-title">
              <span>MEMBERSHIP</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            <ul className="nav sub-menu nav-drop flex-column">
              {this.navSub(subMenuMember)}
            </ul>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default HeaderRight;
