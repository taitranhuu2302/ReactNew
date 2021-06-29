import React, { Component } from "react";
import "./styles.scss";
import Category from "./GCCategory/Category";
import BarFilter from "./GCBarFilter/BarFilter";
import TaskBar from "./TaskBar/TaskBar";
import Products from "./Products/Products";
import Gallery from "./Gallery/Gallery";

class GraphicsCard extends Component {
  render() {
    return (
      <>
        <div className="container-fluid p-0" id="graphics-card">
          <Category listCard={listCard} />
          <BarFilter taskBar={taskBar} />
          <div className="container-fluid mt-4">
            <div className="container">
              <div className="row">
                <div className="col-xl-2 d-none d-xl-block task-bar">
                  <TaskBar taskBar={taskBar} />
                </div>
                <div className="col-xl-10 col-12">
                  <Products />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="gallery">
          <Gallery />
        </div>
      </>
    );
  }
}

const listCard = [
  {
    to: "/GraphicsCard",
    name: "AORUS",
    image: "https://www.aorus.com/assets/img/graphics-cards-aorus.58760d9d.png",
  },
  {
    to: "/GraphicsCard",
    name: "NVIDIA SERIES",
    image:
      "https://www.aorus.com/assets/img/graphics-cards-nvidia.7025d4f5.png",
  },
  {
    to: "/GraphicsCard",
    name: "AMD SERIES",
    image: "https://www.aorus.com/assets/img/graphics-cards-amd.4c5818ab.png",
  },
];

const taskBar = [
  {
    label: "Category",
    list: [
      {
        name: "AORUS",
        active: true,
      },
      {
        name: "GIGABYTE",
        active: false,
      },
    ],
  },
  {
    label: "NIVIDIA Series",
    list: [
      {
        name: "GeForce® GTX TITAN Z",
        active: false,
      },
      {
        name: " GeForce RTX™ 3090",
        active: false,
      },
      {
        name: "GeForce® GTX 1660 Ti",
        active: false,
      },
    ],
  },
  {
    label: "AMD Series",
    list: [
      {
        name: "Radeon™ RX 6900 XT",
        active: false,
      },
      {
        name: " Radeon™ RX 5700 XT",
        active: false,
      },
      {
        name: "Radeon R9 NANO",
        active: false,
      },
    ],
  },
  {
    label: "Memory",
    list: [
      {
        name: "16GB",
        active: false,
      },
      {
        name: "12GB",
        active: false,
      },
      {
        name: "11GB",
        active: false,
      },
      {
        name: "8GB",
        active: false,
      },
      {
        name: "6GB",
        active: false,
      },
      {
        name: "4GB",
        active: false,
      },
      {
        name: "3GB",
        active: false,
      },
      {
        name: "2GB",
        active: false,
      },
      {
        name: "1GB",
        active: false,
      },
    ],
  },
];

export default GraphicsCard;
