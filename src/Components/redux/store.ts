// import { combineReducers, createStore } from "@reduxjs/toolkit";
// import counterReducer from "./reducer";

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./reducer"

export const store = configureStore({
  reducer: {
    products: cartReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch