// src/reducers/index.js
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import authReducer from './authReducer';

// Combine Reducers
const rootReducer = combineReducers({
   products: productsReducer,
    authToken: authReducer
});

export default rootReducer;

