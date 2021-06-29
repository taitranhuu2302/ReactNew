import * as types from "./../Constant/ActionTypes";
import callApi from "./../utils/apiCaller";

export const acShowSlide = () => {
  return {
    type: types.BANNER_SLIDES,
  };
};

export const navItem = () => {
  return {
    type: types.NAVITEM,
  };
};

export const exploreSlides = () => {
  return {
    type: types.EXPLORE_SLIDES,
  };
};

export const gearSlides = () => {
  return {
    type: types.GEAR_SLIDES,
  };
};

export const onChangeLogin = () => {
  return {
    type: types.CHANGE_LOGIN_SIGNIN,
  };
};

export const acOnRegister = (info) => {
  return {
    type: types.REGISTER,
    info,
  };
};

export const acOnLogged = (username) => {
  return {
    type: types.LOGGED,
    username,
  };
};
// List Products

export const acFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(acFetchProducts(res.data));
    });
  };
};

export const acFetchProducts = (products) => {
  return {
    type: types.PRODUCTS,
    products,
  };
};
