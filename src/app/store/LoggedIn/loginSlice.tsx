'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface loginState {
  isLoggedIn: boolean;
}

const initialState: loginState = {
    isLoggedIn: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
})

export const { addLoginStatus } = loginSlice.actions

export default loginSlice.reducer
