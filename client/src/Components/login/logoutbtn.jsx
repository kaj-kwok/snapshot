import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LogOut } from "../../actions/auth";

const LogoutBtn = () => {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(LogOut())
  }

  return (
    <Button onClick={handleLogOut} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Log Out</Button>
  )
}

export default LogoutBtn;