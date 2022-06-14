import axios from 'axios';

const url = "http://localhost:5000"

export const getAllPosts = () => axios.get(`${url}/posts`)
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost)
export const editPost = (id, updatedPost) => axios.patch(`${url}/posts/${id}`, updatedPost)
export const deletedPost = (id) => axios.delete(`${url}/posts/${id}`)
export const getTags = () => axios.get(`${url}/posts/tags`)
export const searchTags = (tags) => axios.get(`${url}/posts/search?tags=${tags}`)
export const fetchUserPosts = (userid) => axios.get(``)

export const userLogin = (user) => axios.post(`${url}/auth/login`, user)