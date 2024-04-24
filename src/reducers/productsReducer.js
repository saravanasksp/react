// Product Reducer
const initialProductsState = {
    products: [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ],
};
const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
      case 'UPDATE_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;
    }
};

export default productsReducer;