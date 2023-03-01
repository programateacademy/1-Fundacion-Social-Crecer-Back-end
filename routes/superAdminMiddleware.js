

const verifySuperAdmin = (req, res, next) => { //next is used to, in case of token correctly verify, assign the route
  if ( req.user.role !='superAdmin') {
    res.status(401).json({ error: 'Rol no autorizado' })
} else {
    next()
}
};

module.exports = verifySuperAdmin;