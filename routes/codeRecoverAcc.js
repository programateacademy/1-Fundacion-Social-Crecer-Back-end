const User = require('../models/User')
const { updateUser } = require('../services/users/userService')
const sendEmailCode = require('../services/email/sendRecoveryCode')
const jwt = require('jsonwebtoken')
const uuid = require('uuid');
const express = require('express');
const codex = express()



codex.get('/:email', async (req, res) => {
    // Generate a random code with 6 digits
    try {
        const userExist = await User.findOne({ email: req.params.email });
        const tempCode = uuid.v4().slice(0, 6)
        await sendEmailCode(tempCode)
        codeTimestamp = Date.now()
        const updateParameters = await updateUser({ tempCode, codeTimestamp }, userExist._id);
        res.send({ message: 'Se ha generado el codigo correctamente, revisa tu correo electronico' });
    } catch (error) {
        console.log(error)
        res.status(400).send({ error, message: 'No fue posible generar el codigo' })
    }
});

// Route for user code verification
codex.post('/', async (req, res) => {
    const userCode = req.body.code;
    const userExist = await User.findOne({ email: req.body.email });
    // Verifies that the user code is the same as the generated code 
    if (userCode === userExist.tempCode) {
        // Check if code is still valid (less than 2 hours old)
        const now = Date.now()
        const timeDiff = now - userExist.codeTimestamp
        const newTime = now - 7300000
        const updateParameters = await updateUser({ codeTimestamp: newTime }, userExist._id);
        if (timeDiff <= 7200000) {

            // Generate token for super admin can login  
            const token = jwt.sign(
                {
                    name: userExist.name, //user data nedded to assign permissions
                    id: userExist._id,
                    role: userExist.role
                },
                process.env.TOKEN_SECRET //secret from .env file
            )

            res.send({ message: 'El codigo ha sido verificado con exito', token })
        } else {
            res.status(404).send({ message: 'El codigo ha expirado, genera uno nuevo' })
        }
    } else {
        res.status(401).send({ message: 'El codigo es incorrecto' })
    }
});



module.exports = codex; 