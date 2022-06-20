import { Container, Space, Title } from "@mantine/core";
import { useSelector } from "react-redux"
import Posts from './posts/posts'

const MyPosts = () => {
  const user = useSelector(state => state.users.user)
  const posts = useSelector(state => state.posts.allPosts.filter(post => post.user_id === user.id))

  return (
    <Container style={{ position: 'relative' }}>
      <Title order={2} style={{ position: 'absolute', left: 0, top: 0 }}>My Posts</Title>
      <Space h="100px"></Space>
      <Posts posts={posts} style={{ marginTop: "200px" }} />
    </Container>
  )
}

export default MyPosts