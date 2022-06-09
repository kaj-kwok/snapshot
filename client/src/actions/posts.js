import { create, fetch_all } from "../reducer/posts"
import { createPost, getAllPosts } from "../api/helpers"

export const createNewPost = (post) => async (dispatch) => {
  try {
    console.log('action')
    const { data } = await createPost(post)
    dispatch(create(data))
  } catch (error) {
    console.log(error);
  }
}

export const fetchAllPosts = () => async (dispatch) => {
  try {
    const { data } = await getAllPosts()
    dispatch(fetch_all(data))
  } catch (error) {
    console.log(error)
  }
}

export const editPost = (id) => async (dispatch) => {

}