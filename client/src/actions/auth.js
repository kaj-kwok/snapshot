import { userLogin, sendUser } from "../api/helpers";
import { loginUser, logoutUser, loginError, resetLoginError, register } from "../reducer/auth";

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

export const registerUser = (values) => async (dispatch) => {
  try {
    const { data } = await sendUser(values)
    dispatch(register(data))
  } catch (error) {
    console.log(error);
  }
}

export const LogOut = () => async (dispatch) => {
  dispatch(logoutUser())
}