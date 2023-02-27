const sendEmailCode = require('../services/email/sendRecoveryCode')
const uuid = require('uuid');
const express = require('express');
const jwt = require('jsonwebtoken')
const codex = express()

let code
let codeTimestamp

codex.get('/', (req, res) => {
    // Generate a random code with 6 digits
    code = uuid.v4().slice(0, 6)
    sendEmailCode(code)
    codeTimestamp = Date.now()
    res.send({ message: 'Se ha generado el codigo correctamente, revisa tu correo electronico', code: code });
});

// Route for user code verification
codex.post('/verify-code', (req, res) => {
    const userCode = req.body.code;
    // Verifies that the user code is the same as the generated code
    if (userCode === code) {
        // Check if code is still valid (less than 2 hours old)
        const now = Date.now()
        const timeDiff = now - codeTimestamp
        if (timeDiff <= 7200000) {
            // Generate token for super admin can login  
            const token = jwt.sign(
                {
                    name: 'super admin', //user data nedded to assign permissions
                    id: 123,
                    role: 'superAdmin'
                },
                process.env.TOKEN_SECRET //secret from .env file
            )
            // sending jwt to header 
            res.header('Authorization', token)
            res.send({ message: 'El codigo ha sido verificado con exito', data: token })
        } else {
            res.status(404).send({ message: 'El codigo ha expirado, genera uno nuevo' })
        }
    } else {
        res.status(401).send({ message: 'El codigo es incorrecto' })
    }
});

module.exports = codex; 