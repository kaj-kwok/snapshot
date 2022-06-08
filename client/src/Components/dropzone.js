import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box, Text } from '@mantine/core'

//convert file to base64
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const MyDropzone = ({ setFile }) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const encodedFile = await convertBase64(acceptedFiles[0])
    setFile(encodedFile)
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