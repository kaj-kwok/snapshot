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
      state.user = action.payload
    },
    logoutUser: (state, action) => {
      state.user = null
    },
    loginError: (state, action) => {
      state.error = action.payload
    },
    resetLoginError: (state, action) => {
      state.error = null
    },
  }
})

export const { loginUser, logoutUser, loginError, resetLoginError } = userReducer.actions
export default userReducer.reducer