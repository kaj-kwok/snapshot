import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'))

app.get("/", (req, res) => {
  res.send("HOLA MUNDO")
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})