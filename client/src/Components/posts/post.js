import { Text } from "@mantine/core";

const Post = ({ post }) => {

  return (
    <div>
      <Text>{post.creator}</Text>
    </div>
  )
}

export default Post;