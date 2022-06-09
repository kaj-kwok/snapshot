import express from "express"
import { createPost, getAllPosts, editPost } from "../helpers/posts.js"

const router = express.Router()

router.get('/', getAllPosts)

router.post('/', createPost)

router.patch('/:id', editPost)

export default router;
