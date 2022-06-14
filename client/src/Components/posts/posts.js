import { SimpleGrid, Loader, Box } from "@mantine/core";
import Post from './post'

const Posts = ({ posts }) => {

  return (
    !posts.length ? <Loader /> : (
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
  );
};

export default Posts;