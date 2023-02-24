const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Joi = require('@hapi/joi');
const User = require('../models/User');

// define the Joi schema for password change request
const schemaChangePassword = Joi.object({
    email: Joi.string().min(6).max(1024).required(),
    newPassword: Joi.string().min(6).max(1024).required(),
    confirmNewPassword: Joi.string().min(6).max(1024).required(),
});

// handle the password change request
router.put('/change-password', async (req, res) => {
    const { error } = schemaChangePassword.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'El usuario no es valido' });


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);

    const checkPass = await req.body.newPassword === req.body.confirmNewPassword
    if (!checkPass) {
        return res.status(400).json({ error: 'Las contraseñas no coinciden' });
    }

    user.password = hashedPassword;
    user.isLocked = false;
    user.failedLoginAttempts = 0;
    await user.save();

    res.json({ error: null, message: 'La contraseña se ha actualizado correctamente' });
});

module.exports = router;