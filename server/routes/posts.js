import express from "express"
import { createPost, getAllPosts, editPost, deletePost, getTags, searchByTag } from "../helpers/posts.js"
import { checkAuth } from "../middleware/auth.js"

const router = express.Router()

router.get('/', getAllPosts)

router.post('/', checkAuth, createPost)

router.patch('/:id', checkAuth, editPost)

router.delete('/:id', checkAuth, deletePost)

router.get('/tags', getTags)

router.get('/search', searchByTag)

export default router;
