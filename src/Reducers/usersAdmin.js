import * as types from "../Constant/ActionTypes";

var initialState = [];

const registerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER:
      state.push(action.user);
      return [...state];
    case types.GET_USERS:
      state = [...action.users];
      return [...state];
    default:
      return [...state];
  }
};

export default registerAdmin;
