import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  error: null
}

const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return action.payload
    },
    logoutUser: (state, action) => {
      return null;
    }
  }
})

export const { loginUser, logoutUser } = userReducer.actions
export default userReducer.reducer