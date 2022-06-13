import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next) => {
  console.log("middleware");
  const headers = req.headers.bearer
  const token = headers.split(' ').toString()
  if (token) {
    try {
      const user = jwt.verify(token, process.env.TOKEN_KEY)
      req.user = user
      console.log("user", user);
    } catch (error) {
      res.status(400).json({ message: "invalid token" })
    }
  } else {
    return res.status(403).json({ message: "no token provided" })
  }
  return next()
}