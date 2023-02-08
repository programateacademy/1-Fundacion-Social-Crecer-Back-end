const router = require('express').Router();
const user = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');

//validation with @joi register
const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    docnum: Joi.number().min(8).max(20).required(),
    unity:Joi.string().min(5).max(255).required()
});
//validation with @joi login
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});


// post req to login
router.post('/login', async (req, res ) =>{



})


// post req to add a new user
router.post('/register', async (req, res) =>{

    //calling validation with @joi and error message received when its necesary
    const { error } = schemaRegister.validate(req.body)

    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
    }
    
    // Email validation
    const emailExist = await user.findOne(
        {
            email: req.body.email
        }
    )
    if (emailExist){
        return res.status(400).json(
            {error:'email ya registrado'}
        )
    }
// hash for the password with bcrypt
const salt = await bcrypt.genSalt(10);
const password = await bcrypt.hash(req.body.password, salt)

// creating the new user json
    const User = new user({
        name: req.body.name,
        email: req.body.email,
        password,
        docnum: req.body.docnum,
        unity:req.body.unity
    })
    try {
        const UserDB = await User.save();
// json response when a new user is created
        res.json({

            error: null,
            data: UserDB
        })

    } catch (error) {
        res.status(400).json(error)
    }


})

module.exports = router;