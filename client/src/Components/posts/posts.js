import { SimpleGrid, Loader } from "@mantine/core";
import { useSelector } from "react-redux";
import Post from './post'

const Posts = ({ posts }) => {
  const isLoading = useSelector(state => state.posts.setLoading)

  return (
    isLoading ? <Loader /> : (
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: 'md', cols: 2, spacing: 'sm' },
          { maxWidth: 'sm', cols: 1, spacing: 'sm' }
        ]}
      >
        {posts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </SimpleGrid>
    )
  )
};

export default Posts;