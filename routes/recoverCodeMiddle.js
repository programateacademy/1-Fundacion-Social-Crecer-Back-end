const recoverCodeMiddle = (req, res, next) => { //next is used to, in case of token correctly verify, assign the route

  const token = req.header('Code')
  if (!token) return res.status(401).json({ error: 'Acceso denegado' })

  else if (token == process.env.CODE_KEY) next()
  else return res.status(401).json({ error: 'Token no valido' })
};

module.exports = recoverCodeMiddle;