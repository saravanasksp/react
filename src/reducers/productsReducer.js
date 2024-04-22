import { FETCH_PRODUCTS } from '../actions';

// Product Reducer
const initialProductsState = {
    products: [],
};
const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;
    }
};

export default productsReducer;