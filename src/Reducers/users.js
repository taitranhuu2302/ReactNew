import * as types from './../Constant/ActionTypes';

var initialState = [];


const users = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            state = action.users;
            return [...state];
        case types.REGISTER:
            state.push(action.user);
            return [...state];
        default:
            return [...state];
    }
}

export default users;