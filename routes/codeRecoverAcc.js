const uuid = require('uuid');
const express = require('express');
const codex = express()
let code


codex.get('/code', (req, res) => {
    // Generate a random code with 6 digits
    code = uuid.v4().slice(0, 6)

    res.send({ message: 'Tu codigo para recuperar la contraseña es:', code });
});
// Route for user code verification
codex.post('/verify-code', (req, res) => {
    const userCode = req.body.code;
    // Verifies that the user code is the same as the generated code
    if (userCode === code) { res.send({ message: 'El codigo se fue verificado correctamente' }) }
    else { res.status(404).send({ message: 'El codigo es incorrecto' }) }
});

module.exports = codex; 