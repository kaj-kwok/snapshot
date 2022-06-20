import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next) => {
  const headers = req.headers.authorization
  const token = headers.split(' ')[1]
  console.log(token);
  if (!token) {
    return res.status(403).json({ message: "no token provided" })
  }
  try {
    console.log("token", token);
    const user = jwt.verify(token, process.env.TOKEN_KEY)
    req.user = user
    console.log("user", user);
  } catch (error) {
    return res.status(400).json({ message: "invalid token" })
  }
  return next()
}