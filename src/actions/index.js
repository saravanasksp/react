
export const saveAuthToken = (token) => {
  return {
      type: 'SAVE_AUTH_TOKEN',
      payload: token
  };
};
  
// Product Action Creators
export const UpdateProducts = (products) => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: products
  }
};

// Product Action Creators
export const BlogList = (bloglist) => {
  return {
    type: 'BLOG_LIST',
    payload: bloglist
  }
};
export const BlogPost = (blogpost) => {
  return {
    type: 'BLOG_POST',
    payload: blogpost
  }
};
