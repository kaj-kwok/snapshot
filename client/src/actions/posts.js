import { create, fetch_all, edit, delete_Post, fetchAllTags } from "../reducer/posts"
import { createPost, getAllPosts, editPost, deletedPost, getTags } from "../api/helpers"

export const createNewPost = (post) => async (dispatch) => {
  try {
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

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await editPost(id, post)
    dispatch(edit(data))
  } catch (error) {
    console.log(error);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await deletedPost(id)
    dispatch(delete_Post(id))
  } catch (error) {
    console.log(error);
  }
}

export const fetchTags = () => async (dispatch) => {
  try {
    const { data } = await getTags()
    return data
  } catch (error) {
    console.log(error);
  }
}