import { Group, Image, Text } from '@mantine/core';
import { Upload, Photo, X, Icon } from 'tabler-icons-react';

function getIconColor(status, theme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
    : status.rejected
      ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
      : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7];
}

function ImageUploadIcon({
  status,
  ...props
}) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <Photo {...props} />;
}

export const dropzoneChildren = (status, theme, thumbs) => (
  < Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
    {thumbs ? <Image src={thumbs} height={64} width={64} /> : <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />}
    <div>
      <Text size="xl" inline>
        Drag images here or click to select files
      </Text>
      <Text size="sm" color="dimmed" inline mt={7}>
        Attach file to upload, file should not exceed 5mb
      </Text>
    </div>
  </Group >
);
