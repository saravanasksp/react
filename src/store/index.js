// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../reducers';
import rootReducer from '../reducers';

const store = configureStore({
  reducer: rootReducer, 
});

export default store;