import { TextInput, PasswordInput, Button, Group, Box, Title, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../actions/auth';
import Error from '../notifications/error';

const Register = () => {
  const error = useSelector(state => state.users.error)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  const handleRegistration = (values) => {
    const user = {
      username: values.email,
      name: values.name,
      password: values.password
    }
    form.reset()
    dispatch(registerUser(user, navigate))
  }

  return (
    <Container fluid={true} style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center' }}>
      <Title order={2} style={{ position: 'absolute', left: 0, top: 0 }}>Create an Account</Title>
      <Box sx={{ minWidth: 300, marginTop: "15%" }}>
        <form onSubmit={form.onSubmit(values => handleRegistration(values))}>
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />
          <TextInput
            required
            label="Name"
            placeholder="Your name"
            {...form.getInputProps('name')}
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
          <Group position="right" mt="md">
            <Button type="submit">Register</Button>
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
  );
}

export default Register;