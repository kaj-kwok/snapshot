import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box, createStyles, Text } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  item: {
    height: "400px"
  }
}));

const MyDropzone = () => {
  const { classes } = useStyles()

  // const onDrop = useCallback(acceptedFiles => {
  //   // Do something with the files
  // }, [])
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Box sx={{ height: "200px" }}>
      <Text>test</Text>
    </Box>

  )
}

export default MyDropzone;