const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('controlador', req.user)
   
        res.json({
            error: null,
            data: {
                title: 'mi ruta protegida',
                user: req.user
            }
        })
    
})

module.exports = router