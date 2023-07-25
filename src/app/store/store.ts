'use client';
import { configureStore } from '@reduxjs/toolkit'
import searchResultsReducer from './SearchResults/searchResultSlice'

export const store = configureStore({
  reducer: {
    searchResult: searchResultsReducer,
  },
})

export { useSelector, useDispatch } from 'react-redux';
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
