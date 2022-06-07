import { Box, TextInput, Group, Button } from '@mantine/core'
import { useForm } from '@mantine/form';

const CreatePost = () => {
  const form = useForm({
    initialValues: {
      email: '',

    }
  })

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Create Post</Button>
        </Group>
      </form>
    </Box>
  )
}

export default CreatePost;