import { configureStore } from '@reduxjs/toolkit'
import postReducer from './posts'
import userReducer from './auth'

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})