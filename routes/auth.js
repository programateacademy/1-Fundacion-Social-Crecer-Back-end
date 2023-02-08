const router = require('express').Router();
const user = require('../models/User')


router.post('/register', async (req, res) =>{

    const User = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        docnum: req.body.docnum,
        unity:req.body.unity
    })
    try {
        const UserDB = await User.save();
        res.json({

            error: null,
            data: UserDB
        })

    } catch (error) {
        res.status(400).json(error)
    }


})

module.exports = router;