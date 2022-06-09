import { useState, useEffect } from 'react'
import { Box, TextInput, Group, Button, CSSObject, useMantineTheme } from '@mantine/core'
import { useForm } from '@mantine/form';
// import Dropzone from '../Components/dropzone';
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
  const theme = useMantineTheme();
  const { slug } = useParams()
  const post = useSelector((state) => (slug ? state.posts.find((message) => message._id === slug) : null));

  useEffect(() => {
    if (post) {
      form.setValues(post)
      setFile(post.uploadedFile)
    }
  }, [])

  const [file, setFile] = useState('')
  const form = useForm({
    initialValues: {
      creator: '',
      title: '',
      description: '',
      tags: [],
      uploadedFile: ''
    }
  })
  const dispatch = useDispatch()


  const handleSubmitForm = (values) => {
    console.log(values);
    if (slug) {
      const post = { ...values, uploadedFile: file }
      dispatch(updatePost(slug, post))
    } else {
      const tags = values.tags.split(',')
      const post = { ...values, uploadedFile: file, tags: tags }
      dispatch(createNewPost(post))
    }
  }

  const handleClearForm = () => {

  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmitForm)}>
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

        {/* <Box sx={useStyle}>
          <Dropzone setFile={setFile} />
        </Box> */}
        <Group position="right" mt="md">
          <Button type="submit">Create Post</Button>
        </Group>
      </form>
    </Box>
  )
}

export default CreatePost;