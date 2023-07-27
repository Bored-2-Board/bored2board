"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface newGamesState {
  gameList: any;
  loading: any;
}

const initialState: newGamesState = {
  gameList: [],
  loading: null,
};

export const newGameSlice = createSlice({
  name: "newGames",
  initialState,
  reducers: {
    addNewResults: (state, action) => {
      state.gameList = action.payload;
      state.loading = false;
    },
    startLoadingNew: (state) => {
      state.loading = true;
    },
  },
});

export const { addNewResults, startLoadingNew } = newGameSlice.actions;

export default newGameSlice.reducer;
