import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return action.payload
    },
    logoutUser: (state, action) => {
      //do something
    }
  }
})

export const { loginUser, logoutUser } = userReducer.actions
export default userReducer.reducer