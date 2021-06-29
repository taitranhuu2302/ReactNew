import * as types from "./../Constant/ActionTypes";

var initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS:
      state = action.products;
      return [...state];
    default:
      return [...state];
  }
};

export default products;
