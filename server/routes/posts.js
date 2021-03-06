import express from "express"
import { getThisPost, createPost, getAllPosts, editPost, deletePost, getTags, searchByTag, likePost } from "../helpers/posts.js"
import { checkAuth } from "../middleware/auth.js"

const router = express.Router()

router.get('/', getAllPosts)


router.post('/', checkAuth, createPost)

router.patch('/:id', checkAuth, editPost)

router.delete('/:id', checkAuth, deletePost)

router.get('/tags', getTags)

router.get('/search', searchByTag)

router.get('/:id', getThisPost)

router.patch('/:id/liked', likePost)

export default router;
