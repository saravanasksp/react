// actions/authActions.js

export const saveAuthToken = (token) => {
return {
    type: 'SAVE_AUTH_TOKEN',
    payload: token
};
};
  