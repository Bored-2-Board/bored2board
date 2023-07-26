'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface popularGamesState {
  gameList: any;
  loading: any;
}

const initialState: popularGamesState = {
  gameList: [],
  loading: null,
}

export const popularGamesSlice = createSlice({
  name: 'popularGames',
  initialState,
  reducers: {
    addPopularResults: (state, action) => {
      console.log(state.gameList);
      state.gameList = action.payload;
      state.loading = false;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    restartLoading: (state) => {
      state.loading = null;
    }
  },
})

export const { addPopularResults, startLoading, restartLoading } = popularGamesSlice.actions

export default popularGamesSlice.reducer