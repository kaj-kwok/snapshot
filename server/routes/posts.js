import express from "express"
import { createPost, getAllPosts, editPost, deletePost } from "../helpers/posts.js"

const router = express.Router()

router.get('/', getAllPosts)

router.post('/', createPost)

router.patch('/:id', editPost)

router.delete('/:id', deletePost)

export default router;
