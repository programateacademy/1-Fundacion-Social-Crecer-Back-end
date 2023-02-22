const uuid = require('uuid');
const express = require('express');
const codex = express()
let code


codex.get('/code', (req, res) => {
    // Generate a random code with 6 digits
    code = uuid.v4().slice(0, 6)

    res.send({ message: 'Tu codigo para recuperar la contraseña es:', code });
});

module.exports = codex; 