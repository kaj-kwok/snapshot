import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { getPost } from '../../actions/posts';
import { Card, Text, Group, Badge, Box, Container, Loader, Anchor } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';

const DetailedPost = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.posts.setLoading)
  const post = useSelector(state => state.posts.allPosts.filter(post => post._id === slug)[0])

  useEffect(() => {
    dispatch(getPost(slug))
  }, [slug])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container fluid={true}>
      <Card shadow="sm" p="lg" style={{ maxHeight: "90vh", display: "flex", flexDirection: "column" }}>
        <Box style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '700px',
          maxHeight: '900px',
          height: 'auto',
          alignSelf: 'center',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <Anchor
            style={{
              position: 'absolute',
              left: '0',
              width: '50%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <IconArrowLeft size={50} color="white" style={{ position: 'absolute', top: '50%' }} />
          </Anchor>

          <img src={post?.uploadedFile
          } alt="profile" object-fit="contain" height="100%" width="100%" />
          <Anchor
            style={{
              position: 'absolute',
              right: '0',
              width: '50%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <span><IconArrowRight size={50} color="white" style={{ position: 'absolute', top: '50%', right: 0 }} />
            </span>
          </Anchor>

        </Box>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
          <Text weight={500}>{post?.title}</Text>
        </Group>

        <Text size="sm" style={{ color: "grey", lineHeight: 1.5 }}>
          {post?.description}
        </Text>
        <Box style={{ paddingTop: '2em' }}>
          {post?.tags?.map(tag => (
            <Badge key={tag} style={{ margin: '5px' }}>{`#${tag}`}</Badge>
          ))
          }
        </Box>
      </Card>
    </Container >
  )
}

export default DetailedPost