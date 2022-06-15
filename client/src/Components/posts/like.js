import { UnstyledButton } from '@mantine/core';
import { IconThumbUp } from '@tabler/icons';

const Like = ({ likes }) => {

  if (likes > 0)
    return (
      <>
        <UnstyledButton
          sx={{
            color: "#4267B2"
          }}

        >
          <IconThumbUp />
        </UnstyledButton>
      </>
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