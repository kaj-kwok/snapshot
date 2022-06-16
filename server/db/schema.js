import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
  {
    user_id: String,
    creator: String,
    title: String,
    description: String,
    tags: [String],
    uploadedFile: String,
    likesCounter: {
      type: [String],
    }
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema)

export default Post;