import express from 'express'
import { userRegister } from '../helpers/auth.js'

const router = express.Router()

router.post("/login", (req, res) => {
  res.send("hello")

})

router.post("/register", userRegister)

export default router;