const router = require('express').Router();
const User = require('../models/User');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//validation with @joi login
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});


// post req to login
router.post('/login', async (req, res) => {
    //calling validation with @joi and error message received when its necesary
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(401).json({ error: error.details[0].message });

    //validation user exists
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist) return res.status(400).json({ error: 'Credenciales no validas' });

    // Check if account is locked
    if (userExist.isLocked) {
        return res.status(401).json({ error: 'Tu cuenta ha sido bloqueada temporalmente, ponte en contacto con el encargado para desbloquearla', userData: [userExist.isLocked, userExist.role, userExist.email] });
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
            role: userExist.role,
            email: userExist.email
        },
        process.env.TOKEN_SECRET //secret from .env file
    )

    // sending jwt to header 
    res.header('auth-token', token)
    res.json({ error: null, data: token })
})



module.exports = router;