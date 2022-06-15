import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const postReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    create: (state, action) => {
      const post = action.payload
      state.push(post)
    },
    fetch_all: (state, action) => {
      return action.payload
    },
    edit: (state, action) => {
      return state.map((post) => (post._id === action.payload ? action.payload : post))
    },
    delete_Post: (state, action) => {
      return state.filter((post) => (post._id !== action.payload))
    },
    fetchBySearch: (state, action) => {
      return action.payload
    },
    fetchMyPosts: (state, action) => {
      return action.payload
    },
    likedPost: (state, action) => {

    }
  }
})

export const { create, fetch_all, edit, delete_Post, fetchBySearch, fetchMyPosts, likedPost } = postReducer.actions
export default postReducer.reducer
