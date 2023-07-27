'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface wishlistGamesState {
  gameList: any;
  loading: any;
}

const initialState: wishlistGamesState = {
  gameList: [],
  loading: false,
}

export const wishlistGamesSlice = createSlice({
  name: 'wishlistGames',
  initialState,
  reducers: {
    addWishlistGame: (state, action) => {
      state.gameList.push(action.payload)
      state.loading = false;
    },
    addAllWishlistGames: (state, action) => {
      state.gameList = action.payload
      state.loading = false;
    },
    removeWishlistGame: (state, action) => {
      state.gameList = state.gameList.filter(game => game.name !== action.payload); // name
    },
    startLoadingWish: (state) => {
      state.loading = true;
    },
    restartLoadingWish: (state) => {
      state.loading = null;
    },
  },
})

export const { addWishlistGame, addAllWishlistGames, startLoadingWish, restartLoadingWish, removeWishlistGame} = wishlistGamesSlice.actions

export default wishlistGamesSlice.reducer
