import express from 'express'
import { userLogin, userRegister } from '../helpers/auth.js'

const router = express.Router()

router.post("/login", userLogin)

router.post("/register", userRegister)

export default router;