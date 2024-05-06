
export const saveAuthToken = (token) => {
  return {
      type: 'SAVE_AUTH_TOKEN',
      payload: token  // token - current state
  };
};
  
// Product Action Creators
export const UpdateProducts = (products) => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: products
  }
};

