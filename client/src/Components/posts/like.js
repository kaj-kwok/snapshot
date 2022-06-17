import { Text, Box } from '@mantine/core';
import { IconThumbUp } from '@tabler/icons';

const Like = ({ likes, user }) => {
  console.log(likes);
  if (likes.length > 0)
    return (
      <>
        {(likes.filter(id => id === user.id)) && <IconThumbUp style={{ color: "#4267B2" }} />}
        <Text size="sm">{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</Text>
      </>
    )
  else {
    return (
      <IconThumbUp />
    )
  }
}

export default Like