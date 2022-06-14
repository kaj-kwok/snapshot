import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

const AuthRoute = () => {
  const user = useSelector(state => state.user)

  if (!user) {
    return <Navigate to="/login" />
  }

  return <Outlet />

}

export default AuthRoute