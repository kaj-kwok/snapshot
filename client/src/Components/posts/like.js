import { UnstyledButton } from '@mantine/core';
import { IconThumbUp } from '@tabler/icons';

const Like = ({ likes }) => {
  console.log(likes);
  if (likes.length > 0)
    return (
      <IconThumbUp style={{ color: "#4267B2" }} />
    )

  return (
    <>
      <UnstyledButton
        sx={{
          '&:hover': {
            color: "#4267B2"
          }
        }}
      >
        <IconThumbUp />
      </UnstyledButton>
    </>
  )
}

export default Like