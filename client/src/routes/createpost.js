import { useState, useEffect } from 'react'
import { Box, TextInput, Group, Button, CSSObject, useMantineTheme } from '@mantine/core'
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { createNewPost, updatePost } from '../actions/posts'
import { useParams } from "react-router-dom";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { dropzoneChildren } from '../Components/form/formdropzone';
import { convertBase64 } from '../Components/form/convertbase64'

const useStyle: CSSObject = {
  border: '1px dashed white',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  padding: '0.5em',
  marginTop: "2em",
  marginBottom: "2em"
}

const CreatePost = () => {
  const user = useSelector(state => state.users.user)
  const theme = useMantineTheme();
  const { slug } = useParams()
  const post = useSelector((state) => (slug ? state.posts.find((message) => message._id === slug) : null));
  const navigate = useNavigate()

  const [file, setFile] = useState('')
  const form = useForm({
    initialValues: {
      user_id: user.id,
      creator: user.name,
      title: '',
      description: '',
      tags: [],
      uploadedFile: ''
    }
  })
  const dispatch = useDispatch()

  useEffect(() => {
    if (post) {
      form.setValues(post)
      setFile(post.uploadedFile)
    }
  }, [])

  const handleSubmitForm = (values) => {
    if (slug) {
      const tags = values.tags.toString().split(',').trim()
      const post = { ...values, uploadedFile: file, tags: tags }
      dispatch(updatePost(slug, post))
    } else {
      const tags = values.tags.split(',')
      const trimmedTags = tags.map(e => e.trim())
      const post = { ...values, uploadedFile: file, tags: trimmedTags }
      dispatch(createNewPost(post))
    }
    handleClearForm()
    navigate("/posts")
  }

  const handleClearForm = () => {
    form.reset()
    setFile('')
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmitForm)}>
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
        <Dropzone
          onDrop={async (files) => {
            console.log('accepted files', files)
            const encodedFile = await convertBase64(files[0])
            setFile(encodedFile)
          }}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          multiple={false}
          style={{
            marginTop: "20px"
          }}
        >
          {(status) => dropzoneChildren(status, theme)}
        </Dropzone>
        <Group position="right" mt="md">
          <Button type="submit" variant='gradient'>Create Post</Button>
        </Group>
      </form>
    </Box>
  )
}

export default CreatePost;