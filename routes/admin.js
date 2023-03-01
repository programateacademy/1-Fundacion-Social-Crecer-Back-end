const express = require('express');
const router = express.Router();
const User = require('../models/User');

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


module.exports = router;