import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const LogoutBtn = () => {
  return (
    <Button component={Link} to="/Login" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Log Out</Button>
  )
}

export default LogoutBtn;