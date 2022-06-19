import { userLogin, sendUser } from "../api/helpers";
import { loginUser, logoutUser, loginError, resetLoginError } from "../reducer/auth";

export const LoginUser = (user, navigate) => async (dispatch) => {
  try {
    const { data } = await userLogin(user)
    dispatch(loginUser(data))
    navigate('/posts')
  } catch (error) {
    dispatch(loginError(error.response.data))
    setTimeout(() => {
      dispatch(resetLoginError())
    }, 5000)
  }
}

export const registerUser = (values, navigate) => async (dispatch) => {
  try {
    const { data } = await sendUser(values)
    dispatch(loginUser(data))
    navigate('/posts')
  } catch (error) {
    dispatch(loginError(error.response.data))
    setTimeout(() => {
      dispatch(resetLoginError())
    }, 5000)
  }
}

export const LogOut = () => async (dispatch) => {
  dispatch(logoutUser())
}