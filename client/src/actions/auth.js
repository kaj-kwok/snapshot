import { userLogin } from "../api/helpers";
import { loginUser, logoutUser, loginError, resetLoginError } from "../reducer/auth";

export const LoginUser = (user, navigate) => async (dispatch) => {
  // dispatch(resetLoginError())
  try {
    const { data } = await userLogin(user)
    dispatch(loginUser(data))
    navigate('/posts')
  } catch (error) {
    console.log(error.response.data);
    dispatch(loginError(error.response.data))
    setTimeout(() => {
      dispatch(resetLoginError())
    }, 5000)
  }
}

export const LogOut = () => async (dispatch) => {
  dispatch(logoutUser())
}