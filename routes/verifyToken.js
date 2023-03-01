const jwt = require('jsonwebtoken')
// middleware to verify JWT from front request (protected routes)

const verifyToken = (req, res, next) => { //next is used to, in case of token correctly verify, assign the route
    const token = req.header('Authorization')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified

        next() // route access accepted
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Token no valido' })
    }
};

module.exports = verifyToken;