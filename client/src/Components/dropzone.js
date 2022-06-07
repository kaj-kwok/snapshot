import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box, Text } from '@mantine/core'


const MyDropzone = () => {

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Box {...getRootProps({
    })} sx={{ height: "150px" }}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <Text size="xl" inline>Drop the files here ...</Text> :
          <Text size="sm" color="dimmed" inline mt={7}>Drag 'n' drop some files here, or click to select files</Text>
      }
    </Box>


  )
}

export default MyDropzone;