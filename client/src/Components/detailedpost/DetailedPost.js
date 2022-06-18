import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { getPost } from '../../actions/posts';
import { Card, Image, Text, Group, Paper } from '@mantine/core';

const DetailedPost = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const post = useSelector(state => state.posts.post)
  console.log(post);

  useEffect(() => {
    dispatch(getPost(slug))
  }, [slug])


  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Card shadow="sm" p="lg" >
        <Paper style={{
          display: 'flex', justifyContent: 'center', marginLeft: "40px", marginRight: "40px "
        }} >
          < Image src={post?.uploadedFile
          } alt="profile" fit="contain" height={900} />
        </Paper>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
          <Text weight={500}>{post.title}</Text>
        </Group>

        <Text size="sm" style={{ color: "grey", lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>
      </Card>
    </div >
  )
}

export default DetailedPost