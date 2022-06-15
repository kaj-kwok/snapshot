import { Alert } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';

const Error = ({ children }) => {
  return (
    <Alert icon={<AlertCircle size={16} />} title="Bummer!" color="red" radius="xl" variant="outline">
      {children}
    </Alert>
  );
}

export default Error