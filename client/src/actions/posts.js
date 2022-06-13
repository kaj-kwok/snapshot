import { create, fetch_all, edit, delete_Post, fetchBySearch } from "../reducer/posts"
import { createPost, getAllPosts, editPost, deletedPost, getTags, searchTags } from "../api/helpers"

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
    console.log("strat")
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

export const searchByTag = (tags) => async (dispatch) => {
  console.log("tags", tags)
  try {
    if (tags !== '') {
      const { data } = await searchTags(tags)
      dispatch(fetchBySearch(data))
    } else {
      console.log("triggereed")
      dispatch(fetchAllPosts())
    }
  } catch (error) {
    console.log(error);
  }
}