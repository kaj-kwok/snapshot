import { Container } from "@mantine/core";
import { useSelector } from "react-redux"
import Posts from './posts/posts'

const MyPosts = () => {
  const user = useSelector(state => state.users.user)
  const posts = useSelector(state => state.posts.allPosts.filter(post => post.user_id === user.id))
  return (
    <Container>
      <Posts posts={posts} />
    </Container>
  )
}

export default MyPosts