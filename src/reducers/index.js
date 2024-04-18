// src/reducers/index.js
import {FETCH_PRODUCTS} from '../actions';
import { combineReducers } from 'redux';

// Product Reducer
const initialProductsState = {
    products: [],
};
const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      default:
        return state;
    }
  };

const initialState = {
    authToken: null
};

const authReducer = (state = initialState, action) => {
switch (action.type) {
    case 'SAVE_AUTH_TOKEN':
        return {
            ...state,
            authToken: action.payload
        };
    case 'CLEAR_AUTH_TOKEN':
        return {
            ...state,
            authToken: null // Set authToken to null when logging out
        };
    default:
        return state;
}
};

//export default authReducer;

// Combine Reducers
const rootReducer = combineReducers({
    products: productsReducer,
    authToken: authReducer,
});

export default rootReducer;
