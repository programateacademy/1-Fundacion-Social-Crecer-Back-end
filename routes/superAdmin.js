const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('controlador', req.user)
    if ( req.user.role !='superAdmin') {
        res.status(401).json({ error: 'Rol no autorizado' })
    } else {
        res.json({
            error: null,
            data: {
                title: 'mi ruta protegida',
                user: req.user
            }
        })
    }
})

module.exports = router