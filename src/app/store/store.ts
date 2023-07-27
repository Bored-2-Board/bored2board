'use client';
import { configureStore } from '@reduxjs/toolkit'
import searchResultsReducer from './SearchResults/searchResultSlice'
import popularResultsReducer from './PopularGames/popularGamesSlice'
import newResultsReducer from './NewGames/newGameSlice'
import loginReducer from './LoggedIn/loginSlice'
import userReducer from './UserData/userDataSlice'
import wishlistReducer from './WishlistGames/wishlistGamesSlice'

export const store = configureStore({
  reducer: {
    searchResult: searchResultsReducer,
    popularResult: popularResultsReducer,
    newResult: newResultsReducer,
    loginResult: loginReducer,
    userResult: userReducer,
    wishlistResult: wishlistReducer,
  },
})

export { useSelector, useDispatch } from 'react-redux';
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
