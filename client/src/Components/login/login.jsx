import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box, PasswordInput } from '@mantine/core';
import { LoginUser } from "../../actions/auth";
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from "react-router-dom";


const Login = () => {
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
    console.log(user);
    dispatch(LoginUser(user, navigate))
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto" my="auto">
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

        <Group position="right" mt="md">
          <Button type="submit" variant='gradient'>Submit</Button>
        </Group>
      </form>
    </Box>
  )
}

export default Login