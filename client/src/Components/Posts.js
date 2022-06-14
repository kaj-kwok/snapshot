import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { fetchAllMyPosts } from "../actions/posts"

const Posts = () => {
  const user = useSelector(state => state.users)
  const posts = useSelector(state => state.posts.filter(post => post.creator === user.id))
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchAllMyPosts(user.id))
  // }, [])

  return (
    <div>Here are my posts</div>
  )
}

export default Posts