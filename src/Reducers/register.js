import * as types from "./../Constant/ActionTypes";

var data = localStorage.getItem("info")
  ? JSON.parse(localStorage.getItem("info"))
  : [];

var initialState = data;

const register = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER:
      state.push(action.info);
      localStorage.setItem("info", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
export default register;
