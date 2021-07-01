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

export const acOnRegister = (user) => {
  return {
    type: types.REGISTER,
    user,
  };
};

export const acRegisterRequest = (user) => {
  return (dispatch) => {
    return callApi("users", "POST", user).then((res) => {
      return dispatch(acOnRegister(res.data));
    });
  };
};

export const acOnLogged = (username) => {
  return {
    type: types.LOGGED,
    username,
  };
};

export const acGetUsersRequest = () => {
  return (dispatch) => {
    return callApi("users", "GET", null).then((res) => {
      if (res.data) {
        return dispatch(acGetUsers(res.data));
      }
    });
  };
};

export const acGetUsers = (users) => {
  return {
    type: types.GET_USERS,
    users,
  };
};

// List Products

export const acFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      if (res.data) {
        return dispatch(acFetchProducts(res.data));
      }
    });
  };
};

export const acFetchProducts = (products) => {
  return {
    type: types.PRODUCTS,
    products,
  };
};

// Cart

export const acGetAllProductCartRequest = () => {
  return (dispatch) => {
    return callApi("carts", "GET", null).then((res) => {
      return dispatch(acGetAllProductCart(res.data));
    });
  };
};

export const acGetAllProductCart = (products) => {
  return {
    type: types.GET_ALL_CART,
    products,
  };
};

export const acAddToCartRequest = (product) => {
  return (dispatch) => {
    return callApi("carts", "POST", product).then((res) => {
      return dispatch(acAddToCart(res.data));
    });
  };
};

export const acAddToCart = (product) => {
  return {
    type: types.ADD_TO_CART,
    product,
  };
};

export const acDeleteProductCartRequest = (id) => {
  return (dispatch) => {
    return callApi(`carts/${id}`, "DELETE", null).then((res) => {
      return dispatch(acDeleteProductCart(id));
    });
  };
};

export const acDeleteProductCart = (id) => {
  return {
    type: types.DELETE_CART,
    id,
  };
};
