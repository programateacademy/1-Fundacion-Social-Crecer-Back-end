const jwt = require('jsonwebtoken')

const changePassMiddle = (req, res, next) => {
  const token = req.header('Authorization')
  if (!token) { return res.status(401).json({ message: "No tienes permiso para cambiar la contraseña" }) }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = decoded
  } catch {
    res.status(401).json({ message: "Token no valido" })
  }
}