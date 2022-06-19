import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { getPost } from '../../actions/posts';
import { Card, Image, Text, Group, Paper, Badge, Box } from '@mantine/core';

const DetailedPost = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const post = useSelector(state => state.posts.post)
  const isLoading = useSelector(state => state.posts.setLoading)

  useEffect(() => {
    dispatch(getPost(slug))
  }, [slug])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Card shadow="sm" p="lg" >
        <Paper style={{
          display: 'flex', justifyContent: 'center'
        }} >
          < Image src={post?.uploadedFile
          } alt="profile" fit="contain" height={900} />
        </Paper>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
          <Text weight={500}>{post.title}</Text>
        </Group>

        <Text size="sm" style={{ color: "grey", lineHeight: 1.5 }}>
          {post.description}
        </Text>
        <Box style={{ paddingTop: '2em' }}>
          {post?.tags?.map(tag => (
            <Badge key={tag} style={{ margin: '5px' }}>{`#${tag}`}</Badge>
          ))
          }
        </Box>
      </Card>
    </div >
  )
}

export default DetailedPost