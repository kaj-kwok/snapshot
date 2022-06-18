import { Container } from "@mantine/core";
import { fetchAllPosts } from "../actions/posts";
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Posts from "./posts/posts";

const Home = () => {
  const posts = useSelector(state => state.posts.posts)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllPosts())
  }, [])

  return (
    <Container>
      <Posts posts={posts} />
    </Container>
  )
}

export default Home;

