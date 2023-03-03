const router = require('express').Router();
const Joi = require('joi');
const { createUser, emailExist, updateUser, deleteUser } = require('../services/users/userService');
const User = require('../models/User');

//validation with joi register
const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required().messages({ "string.min": 'El nombre debe tener 6 dígitos' }),
    email: Joi.string().min(6).max(255).required().email().messages({ "string.base": 'El formato de email no es válido' }),
    password: Joi.string().min(6).max(1024).required().messages({ "string.min": 'La contraseña debe tener mínimo 6 dígitos' }),
    docnum: Joi.number().min(8).required().messages({ "number.base": `El valor ingresado debe ser un numero` }),
    unity: Joi.string().max(255).required(),
    role: Joi.string().min(1).max(255)
});
// Ruta GET para obtener todos los admin
router.get('/admin', async (req, res) => {
    try {
        const Users = await User.find();
        res.json(Users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta GET para obtener un admin por ID
router.get('/admin/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Ruta POST para crear un nuevo admin
router.post('/admin', async (req, res) => {
    //calling validation with @joi and error message received when its necesary
    const { error } = schemaRegister.validate(req.body)
    if (error) {
        return res.status(400).json(
            { error: error.details[0].message }
        )
    }
    // Email validation
    if (await emailExist(req.body)) {
        return res.status(400).json(
            { error: 'Email ya registrado' }
        )
    }
    try {
        const newUserResponse = await createUser(req.body)
        // json response when a new user is created
        res.json({
            error: null,
            data: newUserResponse
        })
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/admin/:id', async (req, res) => {
    try {
        const deleteUserResponse = await deleteUser(req.params.id)
        res.json({
            error: null,
            data: deleteUserResponse
        })
    } catch (error) {
        res.status(400).json(error)
    }
})

const schemaPut = Joi.object({
    name: Joi.string().min(6).max(255),
    email: Joi.string().min(6).max(255).email(),
    password: Joi.string().min(6).max(1024),
    docnum: Joi.number().min(8),
    unity: Joi.string().min(5).max(255),
    role: Joi.string().min(1).max(255)
});
// Ruta PUT para actualizar un User existente
router.put('/admin/:id', async (req, res) => {
    const { error } = schemaPut.validate(req.body)
    if (error) {
        return res.status(400).json(
            { error: error.details[0].message }
        )
    }
    // Email validation
    if (await emailExist(req.body)) {
        return res.status(400).json(
            { error: 'Email ya registrado' }
        )
    }
    try {
        const updateParameters = await updateUser(req.body, req.params.id);
        res.json({
            error: null,
            data: updateParameters
        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router