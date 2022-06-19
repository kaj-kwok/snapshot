import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
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