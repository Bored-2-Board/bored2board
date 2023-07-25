'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface searchResultState {
  gameList: any;
}

const initialState: searchResultState = {
  gameList: [],
}

export const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    addSearchResults: (state, action) => {
      console.log(state.gameList)
      state.gameList = action.payload;
    },
  },
})

export const { addSearchResults } = searchResultSlice.actions

export default searchResultSlice.reducer
