// actions/authActions.js
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';


export const saveAuthToken = (token) => {
return {
    type: 'SAVE_AUTH_TOKEN',
    payload: token
};
};
  
// Product Action Creators
export const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
    payload: [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ],
  });