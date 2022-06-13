import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <Button component={Link} to="/Login" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Login</Button>
  )
}

export default LoginBtn;