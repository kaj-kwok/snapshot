import express from "express"
import { createPost, getAllPosts, editPost, deletePost, getTags, searchByTag } from "../helpers/posts.js"

const router = express.Router()

router.get('/', getAllPosts)

router.post('/', createPost)

router.patch('/:id', editPost)

router.delete('/:id', deletePost)

router.get('/tags', getTags)

router.get('/search', searchByTag)

export default router;
