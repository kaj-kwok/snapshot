import mongoose from 'mongoose';
import User from '../db/users.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

export const userLogin = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username: username })
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({
        user_id: user._id,
        name: user.name
      },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        })
      const returnedUser = { id: user._id, name: user.name, token: token }
      res.status(200).json(returnedUser)
    } else {
      res.status(404).json({
        message: "Login failed"
      })
    }
  } catch (error) {
    res.json(error)
  }
}

export const userRegister = async (req, res) => {
  const { username, password, name } = req.body
  console.log(username, password, name)
  //check if user exists

  try {
    const checkUser = await User.findOne({
      username: username
    })
    if (checkUser) {
      res.status(400).json({
        message: "user exists"
      })
    }
    else {
      console.log("no user");
      const hashedPassword = bcrypt.hashSync(password, 12)
      console.log("hashed", hashedPassword);
      const user = await User.create({
        username: username,
        password: hashedPassword,
        name: name
      })
      console.log("user", user);
      const token = jwt.sign({
        user_id: user._id,
        name: user.name
      }, process.env.TOKEN_KEY, {
        expiresIn: "1h",
      })
      console.log("token", token);
      const returnedUser = { id: user._id, name: user.name, token: token }
      console.log("returned user", returnedUser);
      res.status(200).json(returnedUser)
    }
  } catch (error) {
    res.json(error)
  }

}