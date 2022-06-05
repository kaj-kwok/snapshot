import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
  {
    creator: String,
    title: String,
    description: String,
    tags: [String],
    uploadedFile: String,
    likesCounter: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema)

export default Post;