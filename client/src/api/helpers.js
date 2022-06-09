import axios from 'axios';

const url = "http://localhost:4000/posts"

export const getAllPosts = () => axios.get(url)
export const createPost = (newPost) => {
  return axios.post(url, newPost)
}
export const editPost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)