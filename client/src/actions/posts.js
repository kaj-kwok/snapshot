import { create, fetch_all } from "../reducer/posts"
import { createPost, getAllPosts } from "../api/helpers"

export const createNewPost = (post) => async (dispatch) => {
  console.log('action')
  const data = await createPost(post)
  dispatch(create(data))
}

export const fetchAllPosts = () => async (dispatch) => {
  try {
    const { data } = await getAllPosts()
    dispatch(fetch_all(data))
  } catch (error) {
    console.log(error)
  }
}