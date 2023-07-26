import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import toastReducer from './features/toastSlice';

export const store = configureStore({
  reducer: { user: userReducer, toast: toastReducer },
});
