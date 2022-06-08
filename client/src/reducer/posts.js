import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const postReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    create: (state, action) => {
      console.log(action.payload)
    },
    fetch_all: (state, action) => {
      return action.payload
    }
  }
})

export const { create, fetch_all } = postReducer.actions
export default postReducer.reducer
