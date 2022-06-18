import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'tabler-icons-react';
import { useEffect } from 'react'
import { getPost } from '../../actions/posts';

const DetailedPost = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPost(slug))
  }, [slug])

  return (
    <Container>
      <div>Picture</div>
    </Container>
  )
}

export default DetailedPost