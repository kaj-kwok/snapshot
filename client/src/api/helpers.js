import axios from 'axios';
import { store } from '../reducer/index';

const url = "http://localhost:5000"

store.subscribe(listener)

function select(state) {
  return state.users?.user.token
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
export const editPost = (id, updatedPost) => API.patch(`${url}/posts/${id}`, updatedPost)
export const deletedPost = (id) => API.delete(`${url}/posts/${id}`)
export const getTags = () => API.get(`${url}/posts/tags`)
export const searchTags = (tags) => API.get(`${url}/posts/search?tags=${tags}`)
export const likedPost = (user_id, post_id) => API.patch(`${url}/posts/${post_id}/liked`, { user_id, post_id })

export const userLogin = (user) => axios.post(`${url}/auth/login`, user)
