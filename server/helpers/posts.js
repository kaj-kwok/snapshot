import Post from "../db/schema.js"
import mongoose from 'mongoose';

export const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find()
    res.status(200).json(allPosts)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  console.log("req.body", req.body);
  const post = req.body;
  const newPost = new Post(post)

  try {
    await newPost.save();

    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const editPost = async (req, res) => {
  const { id } = req.params
  const post = req.body
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Post Found with id: ${id}`)
  try {
    const updatePost = await Post.findByIdAndUpdate(id, post)
    res.status(201).json(updatePost)
  } catch (error) {
    console.log(error);
  }
}