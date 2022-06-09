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
      console.log(action.payload)
    }
  }
})

export const { create, fetch_all } = postReducer.actions
export default postReducer.reducer
