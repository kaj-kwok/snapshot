import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allPosts: [],
  setLoading: false,
}


const postReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    create: (state, action) => {
      const post = action.payload
      state.allPosts.push(post)
    },
    fetch_all: (state, action) => {
      return { ...state, allPosts: action.payload }
    },
    edit: (state, action) => {
      const updatedPost = action.payload
      const updateState = state.allPosts.map(post => post._id === updatedPost._id ? updatedPost : post)
      return { ...state, allPosts: updateState }
    },
    delete_Post: (state, action) => {
      return { ...state, allPosts: state.allPosts.filter((post) => (post._id !== action.payload)) }
    },
    fetchBySearch: (state, action) => {
      return { ...state, allPosts: action.payload }
    },
    fetchMyPosts: (state, action) => {
      return action.payload
    },
    updateLikes: (state, action) => {
      return { ...state, allPosts: state.allPosts.map((post) => (post._id === action.payload._id ? action.payload : post)) }
    },
    fetchPost: (state, action) => {
      const updatedPost = action.payload
      const updateState = state.allPosts.map(post => post._id === updatedPost._id ? updatedPost : post)
      return { ...state, allPosts: updateState }
    },
    setLoading: (state, action) => {
      return { ...state, setLoading: action.payload }
    }
  }
})

export const { create, fetch_all, edit, delete_Post, fetchBySearch, fetchMyPosts, updateLikes, fetchPost, setLoading } = postReducer.actions
export default postReducer.reducer
