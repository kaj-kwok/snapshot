import express from "express"
import { createPost, getAllPosts, editPost, deletePost, getTags } from "../helpers/posts.js"

const router = express.Router()

router.get('/', getAllPosts)

router.post('/', createPost)

router.patch('/:id', editPost)

router.delete('/:id', deletePost)

router.get('/tags', getTags)

export default router;
