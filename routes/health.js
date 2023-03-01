const router = require('express').Router();

router.get('/health', (req, res) => {
        res.send({message: 'OK'})
})

module.exports = router