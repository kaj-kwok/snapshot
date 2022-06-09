import Post from "../db/schema.js"

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