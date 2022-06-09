import { configureStore } from '@reduxjs/toolkit'
import postReducer from './posts'

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})