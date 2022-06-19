import { TextInput, PasswordInput, Button, Group, Box, Title, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/auth';

const Register = () => {
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
    dispatch(registerUser(user))
  }

  return (
    <Container fluid={true} style={{ display: 'flex', position: 'relative' }}>
      <Title order={2} style={{ position: 'absolute', left: 0, top: 0 }}>Create an Account</Title>
      <Box sx={{ minWidth: 300, marginTop: "15%" }} mx="auto">
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
    </Container>
  );
}

export default Register;