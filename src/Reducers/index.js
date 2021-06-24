import { combineReducers } from "redux";
import slider from "./slider";
import navItem from "./navItem";
import gearSlides from "./gearSlides";
import exploreSlides from "./exploreSlides";
import changeLogin from "./changeLogin";

const myReducers = combineReducers({
  slider,
  navItem,
  gearSlides,
  exploreSlides,
  changeLogin,
});

export default myReducers;
