import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  post: [],
}


const postReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    create: (state, action) => {
      const post = action.payload
      state.posts.push(post)
    },
    fetch_all: (state, action) => {
      return { ...state, posts: action.payload }
    },
    edit: (state, action) => {
      return state.map((post) => (post._id === action.payload._id ? action.payload : post))
    },
    delete_Post: (state, action) => {
      return state.filter((post) => (post._id !== action.payload))
    },
    fetchBySearch: (state, action) => {
      return { ...state, posts: action.payload }
    },
    fetchMyPosts: (state, action) => {
      return action.payload
    },
    updateLikes: (state, action) => {
      return state.map((post) => (post._id === action.payload._id ? action.payload : post))
    },
    fetchPost: (state, action) => {
      const post = action.payload
      return { ...state, post: post }
    }
  }
})

export const { create, fetch_all, edit, delete_Post, fetchBySearch, fetchMyPosts, updateLikes, fetchPost } = postReducer.actions
export default postReducer.reducer
