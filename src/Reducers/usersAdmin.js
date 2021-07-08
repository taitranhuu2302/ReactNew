import * as types from "../Constant/ActionTypes";

var initialState = [];

var findIndex = (id, list) => {
  var result = -1;

  list.forEach((item, index) => {
    if (item.id === id) {
      return (result = index);
    }
  });

  return result;
};

const registerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER:
      state.push(action.user);
      return [...state];
    case types.GET_USERS:
      state = [...action.users];
      return [...state];
    case types.UPDATE_USER:
      var index = findIndex(action.user.id, state);
      state[index] = action.user;
      return [...state];
    default:
      return [...state];
  }
};

export default registerAdmin;
