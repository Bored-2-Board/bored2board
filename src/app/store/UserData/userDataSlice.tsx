"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userData {
  name: string;
  email: string;
  username: string;
  id: string | number;
}

const initialState: userData = {
  name: "",
  email: "",
  username: "",
  id: "",
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
  },
});

export const { updateData } = userDataSlice.actions;

export default userDataSlice.reducer;
