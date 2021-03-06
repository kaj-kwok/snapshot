import axios from 'axios';
import { store } from '../reducer/index';

const url = process.env.REACT_APP_API_URL || 'http://localhost:5000'

console.log("url", url);
store.subscribe(listener)

function select(state) {
  return state.users.user?.token
}

function listener() {
  let token = select(store.getState())
  API.defaults.headers.common['Authorization'] = `Bearer: ${token}`;
}

const API = axios.create({
  baseURL: url,
})

export const getAllPosts = () => API.get(`${url}/posts`)
export const getThisPost = (id) => API.get(`${url}/posts/${id}`)
export const createPost = (newPost) => API.post(`${url}/posts`, newPost)
export const editPost = (id, updatedPost) => API.patch(`${url}/posts/${id}`, updatedPost)
export const deletedPost = (id) => API.delete(`${url}/posts/${id}`)
export const getTags = () => API.get(`${url}/posts/tags`)
export const searchTags = (tags) => API.get(`${url}/posts/search?tags=${tags}`)
export const likedPost = (userid, postid) => API.patch(`${url}/posts/${postid}/liked`, { userid, postid })

export const userLogin = (user) => axios.post(`${url}/auth/login`, user)
export const sendUser = (user) => axios.post(`${url}/auth/register`, user)
