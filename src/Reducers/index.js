import { combineReducers } from "redux";
import slider from "./slider";
import navItem from "./navItem";
import gearSlides from "./gearSlides";
import exploreSlides from "./exploreSlides";

const myReducers = combineReducers({
  slider,
  navItem,
  gearSlides,
  exploreSlides,
});

export default myReducers;
