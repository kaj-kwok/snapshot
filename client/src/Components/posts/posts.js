import { SimpleGrid, Loader, createStyles, Box } from "@mantine/core";
import Post from './post'
import { useSelector } from 'react-redux'

const useStyles = createStyles(() => ({
  grid: {
    cols: 3,
    spacing: "lg",
    backgroundColor: "white",
    breakpoints:
      [
        { maxWidth: 'md', cols: 2, spacing: 'sm' },
        { maxWidth: 'sm', cols: 1, spacing: 'sm' }
      ]
  }
}))

const Posts = () => {
  const { classes } = useStyles();
  const posts = useSelector(state => state.posts)

  return (
    !posts.length ? <Loader /> : (
      <SimpleGrid className={classes.grid} >
        {posts.map(post => (
          <Box key={post._id}>
            <Post post={post} />
          </Box>
        ))}
      </SimpleGrid>
    )
  );
};

export default Posts;