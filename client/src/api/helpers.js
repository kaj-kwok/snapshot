import axios from 'axios';
import { store } from '../reducer/index';

const url = "http://localhost:5000"

store.subscribe(listener)

function select(state) {
  return state.users?.token
}

function listener() {
  let token = select(store.getState())
  API.defaults.headers.common['Authorization'] = `Bearer: ${token}`;
}

const API = axios.create({
  baseURL: url,
})

// const token = store.dispatch(getToken())
// const API = axios.create({
//   baseURL: url
// })

// API.interceptors.request.use(req => {
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`

//   }
// })

export const getAllPosts = () => API.get(`${url}/posts`)
export const createPost = (newPost) => API.post(`${url}/posts`, newPost)
export const editPost = (id, updatedPost) => axios.patch(`${url}/posts/${id}`, updatedPost)
export const deletedPost = (id) => axios.delete(`${url}/posts/${id}`)
export const getTags = () => axios.get(`${url}/posts/tags`)
export const searchTags = (tags) => axios.get(`${url}/posts/search?tags=${tags}`)

export const userLogin = (user) => axios.post(`${url}/auth/login`, user)