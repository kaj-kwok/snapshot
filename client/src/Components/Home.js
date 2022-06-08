import { Container } from "@mantine/core";
import { fetchAllPosts } from "../actions/posts";
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import Posts from "./posts/posts";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllPosts())
  }, [])

  return (
    <Container>
      <Posts />
    </Container>
  )
}

export default Home;

