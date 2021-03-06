import { create, fetch_all, edit, delete_Post, fetchBySearch, updateLikes, fetchPost, setLoading, postError, resetPostError } from "../reducer/posts"
import { createPost, getThisPost, getAllPosts, editPost, deletedPost, getTags, searchTags, likedPost } from "../api/helpers"

export const createNewPost = (post) => async (dispatch) => {
  try {
    const { data } = await createPost(post)
    dispatch(create(data))
  } catch (error) {
    console.log(error);
  }
}

export const fetchAllPosts = () => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await getAllPosts()
    dispatch(fetch_all(data))
    dispatch(setLoading(false))
  } catch (error) {
    dispatch(postError(error.response.data))
    setTimeout(() => {
      dispatch(resetPostError())
    }, 5000)
  }
}

export const getPost = (id) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await getThisPost(id)
    dispatch(fetchPost(data))
    dispatch(setLoading(false))
  } catch (error) {
    console.log(error);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const { data } = await editPost(id, post)
    dispatch(edit(data))
    dispatch(setLoading(false))
  } catch (error) {
    console.log(error);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await deletedPost(id)
    dispatch(delete_Post(data))
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

export const likePost = (user_id, post_id) => async (dispatch) => {
  try {
    const { data } = await likedPost(user_id, post_id)
    dispatch(updateLikes(data))
  } catch (error) {
    console.log(error);
  }
}