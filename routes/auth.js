const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

//validation with @joi register
const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    docnum: Joi.number().min(8).required(),
    unity: Joi.string().min(5).max(255).required(),
    role: Joi.string().min(1).max(255).required()
});
//validation with @joi login
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});


// post req to login
router.post('/login', async (req, res) => {
    //calling validation with @joi and error message received when its necesary
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    //validation user exists
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist) return res.status(400).json({ error: 'Credenciales no validas' });

    // Check if account is locked
    if (userExist.isLocked) {
        return res.status(401).json({ error: 'Cuenta temporalmente bloqueada. Por favor, intente de nuevo más tarde.' });
    }

    //validation password is correct
    const passValid = await bcrypt.compare(req.body.password, userExist.password);
    if (!passValid) {
        userExist.failedLoginAttempts = userExist.failedLoginAttempts + 1
        if (userExist.failedLoginAttempts >= 3) {
            // Lock account if login attempts exceed 3
            userExist.isLocked = true;
        }
        await userExist.save();
        return res.status(400).json({ error: 'Credenciales no validas' })
    }

    // Reset login attempts if successful login
    userExist.failedLoginAttempts = 0;
    await userExist.save();

    // token created
    const token = jwt.sign(
        {
            name: userExist.name, //user data nedded to assign permissions
            id: userExist._id,
            role: userExist.role
        },
        process.env.TOKEN_SECRET //secret from .env file
    )

    // sending jwt to header 
    res.header('auth-token', token)
    res.json({ error: null, data: token })
})


// post req to add a new user
router.post('/register', async (req, res) => {

    //calling validation with @joi and error message received when its necesary
    const { error } = schemaRegister.validate(req.body)

    if (error) {
        return res.status(400).json(
            { error: error.details[0].message }
        )
    }

    // Email validation
    const emailExist = await User.findOne(
        {
            email: req.body.email
        }
    )
    if (emailExist) {
        return res.status(400).json(
            { error: 'Email ya registrado' }
        )
    }
    // hash for the password with bcrypt
    const salt = await bcrypt.genSalt(1);
    const password = await bcrypt.hash(req.body.password, salt)

    // creating the new user json
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password,
        docnum: req.body.docnum,
        unity: req.body.unity,
        role: req.body.role

    })
    try {
        const newUser = await user.save()
        // json response when a new user is created
        res.json({

            error: null,
            data: newUser
        })

    } catch (error) {
        res.status(400).json(error)
    }


})

module.exports = router;