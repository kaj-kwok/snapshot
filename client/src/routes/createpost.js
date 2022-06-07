import { Box, TextInput, Group, Button } from '@mantine/core'
import { useForm } from '@mantine/form';

const CreatePost = () => {
  const form = useForm({
    initialValues: {
      creator: '',
      title: '',
      description: '',
      tags: [],
      uploadedFile: ''
    }
  })

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="Creator"
          placeholder="Creator"
          {...form.getInputProps('creator')}
        />
        <TextInput
          required
          label="Title"
          placeholder="Title"
          {...form.getInputProps('title')}
        />
        <TextInput
          required
          label="Description"
          placeholder="Description"
          {...form.getInputProps('description')}
        />
        <TextInput
          required
          label="Tags"
          placeholder="Tags"
          {...form.getInputProps('tags')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Create Post</Button>
        </Group>
      </form>
    </Box>
  )
}

export default CreatePost;