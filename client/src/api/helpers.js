import axios from 'axios';

const url = "http://localhost:4000/posts"

export const getAllPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const editPost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletedPost = (id) => axios.delete(`${url}/${id}`)
export const getTags = () => axios.get(`${url}/tags`)