import { UnstyledButton } from '@mantine/core';
import { IconThumbUp } from '@tabler/icons';

const Like = ({ likes, user }) => {
  console.log(likes);
  if (likes.length > 0)
    return (
      (likes.filter(id => id === user.id)) && <IconThumbUp style={{ color: "#4267B2" }} />
    )
  else {
    return (

      <IconThumbUp />
    )
  }
}

export default Like