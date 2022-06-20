import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box, PasswordInput, Anchor, Container, Title } from '@mantine/core';
import { LoginUser } from "../../actions/auth";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import Error from "../notifications/error";


const Login = () => {
  const error = useSelector(state => state.users.error)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  const handleSubmit = (values) => {
    const user = {
      username: values.email,
      password: values.password
    }
    form.reset()
    dispatch(LoginUser(user, navigate))
  }

  return (
    <Container fluid={true} style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center' }}>
      <Title order={2} style={{ position: 'absolute', left: 0, top: 0 }}>Login to Account</Title>
      <Box sx={{ minWidth: 300, marginTop: "15%" }}>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            required
            label="Password"
            placeholder="Password"
            {...form.getInputProps('password')}
          />
          <PasswordInput
            required
            label="Confirm Password"
            placeholder="Confirm Password"
            {...form.getInputProps('confirmPassword')}
          />
          <Group position="right" mt="md" style={{ justifyContent: 'space-between' }}>
            <Anchor size="sm" component={Link} to='/auth/register'>Create Account</Anchor>
            <Button type="submit" variant='gradient'>Submit</Button>
          </Group>
        </form>
      </Box>
      <Box sx={{ maxWidth: 300 }} style={{
        position: "relative",
        marginTop: "20%",
        width: "100%",
      }}
        mx="auto"
      >
        {error && <Error >{error.message}</Error>}
      </Box>
    </Container>
  )
}

export default Login