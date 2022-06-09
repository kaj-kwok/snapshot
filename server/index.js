import 'dotenv/config';
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import postRoutes from "./routes/posts.js"
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

app.get("/", (req, res) => {
  res.send("HOLA MUNDO")
})

const CONNECTION_URL = process.env.CONNECTION_URL

const db = mongoose.connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    }))
  .catch(err => console.log(err))
