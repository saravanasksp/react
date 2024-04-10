// src/reducers/index.js

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

export default authReducer;
