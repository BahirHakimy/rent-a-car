import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toasts: [],
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.toasts.push(action.payload);
    },

    removeToast: (state, action) => {
      state.toasts.filter((_, index) => index !== action.payload);
    },

    clear: (state) => {
      state.toasts = [];
    },
  },
});

export default toastSlice.reducer;

export const { addToast, removeToast, clear } = toastSlice.actions;
