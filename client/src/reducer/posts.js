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
      state.map((post) => (post._id === action.payload ? action.payload : post))
    }
  }
})

export const { create, fetch_all, edit } = postReducer.actions
export default postReducer.reducer
