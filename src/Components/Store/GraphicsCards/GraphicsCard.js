import React, { Component } from "react";
import "./styles.scss";
import Category from "./GCCategory/Category";
import BarFilter from "./GCBarFilter/BarFilter";
import TaskBar from "./TaskBar/TaskBar";
import Products from "./Products/Products";

class GraphicsCard extends Component {
  render() {
    return (
      <div className="container-fluid p-0" id="graphics-card">
        <Category listCard={listCard} />
        <BarFilter taskBar={taskBar} />
        <div className="container-fluid mt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 d-none d-lg-block task-bar">
                <TaskBar taskBar={taskBar} />
              </div>
              <div className="col-lg-10 col-12">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
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
      },
      {
        name: "GIGABYTE",
      },
    ],
  },
  {
    label: "NIVIDIA Series",
    list: [
      {
        name: "GeForce® GTX TITAN Z",
      },
      {
        name: " GeForce RTX™ 3090",
      },
      {
        name: "GeForce® GTX 1660 Ti",
      },
    ],
  },
  {
    label: "AMD Series",
    list: [
      {
        name: "Radeon™ RX 6900 XT",
      },
      {
        name: " Radeon™ RX 5700 XT",
      },
      {
        name: "Radeon R9 NANO",
      },
    ],
  },
  {
    label: "Memory",
    list: [
      {
        name: "16GB",
      },
      {
        name: "12GB",
      },
      {
        name: "11GB",
      },
      {
        name: "8GB",
      },
      {
        name: "6GB",
      },
      {
        name: "4GB",
      },
      {
        name: "3GB",
      },
      {
        name: "2GB",
      },
      {
        name: "1GB",
      },
    ],
  },
];

export default GraphicsCard;
