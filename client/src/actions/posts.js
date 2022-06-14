import { create, fetch_all, edit, delete_Post, fetchBySearch, fetchMyPosts } from "../reducer/posts"
import { createPost, getAllPosts, editPost, deletedPost, getTags, searchTags, fetchUserPosts } from "../api/helpers"

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

export const searchByTag = (tags) => async (dispatch) => {
  try {
    if (tags !== '') {
      const { data } = await searchTags(tags)
      dispatch(fetchBySearch(data))
    } else {
      dispatch(fetchAllPosts())
    }
  } catch (error) {
    console.log(error);
  }
}

export const fetchAllMyPosts = (userid) => async (dispatch) => {
  try {
    const { data } = await fetchUserPosts(userid)
    dispatch(fetchMyPosts(data))
  } catch (error) {
    console.log(error);
  }
}