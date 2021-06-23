import * as types from "./../Constant/ActionTypes";

var inititalState = [
  {
    navItem: "PRODUCTS",
    list: [
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
    ],
  },
  {
    navItem: "EXPLORE",
    list: [
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
    ],
  },
  {
    navItem: "SERVICE",
    list: [
      {
        to: "/",
        label: "WARRANTY INFORMATION",
      },
      {
        to: "/",
        label: "PRODUCT REGISTRATION",
      },
    ],
  },
  {
    navItem: "MEMBERSHIP",
    list: [
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
    ],
  },
];

const navItem = (state = inititalState, action) => {
  switch (action.type) {
    case types.NAVITEM:
      return [...state];
    default:
      return [...state];
  }
};
export default navItem;
