import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
  creator: String,
  title: String,
  description: String,
  createdAt: {
    Date,
    immutable: true,
    default: () => Date.now()
  },
  updatedAt: {
    Date,
    default: () => Date.now()
  },
  tags: [String],
  uploadedFile: String,
  likesCounter: {
    type: Number,
    default: 0
  }
}) 