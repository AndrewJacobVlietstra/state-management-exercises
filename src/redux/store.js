import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './reducers/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer
  }
});