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
    addLoginStatus: (state) => {
      state.isLoggedIn = true;
    },
  },
})

export const { addLoginStatus } = loginSlice.actions

export default loginSlice.reducer
