import { Text } from '@mantine/core';
import { IconThumbUp } from '@tabler/icons';

const Like = ({ likes, user }) => {
  const userVoted = likes.findIndex(id => id === user)
  console.log(userVoted, "userVoted");
  if (userVoted !== -1) {
    return (
      <>
        <IconThumbUp style={{ color: "#4267B2" }} />
        <Text size="sm">{likes.length > 2 ? `You and ${likes.length - 1} others` : likes.length === 2 ? `You and 1 other like this` : `You like this`}</Text>
      </>
    )
  }
  else {
    return (
      <>
        <IconThumbUp />
        <Text size="sm">{likes.length > 0 ? `${likes.length} likes` : ''}</Text>
      </>
    )
  }
}

export default Like