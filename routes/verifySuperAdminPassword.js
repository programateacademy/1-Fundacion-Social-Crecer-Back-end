const router = require('express').Router();
const User = require('../models/User');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

//validation with @joi login
const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
});

// post req to super admin can verify his login
router.post('/', async (req, res) => {
  //calling validation with @joi and error message received when its necesary
  const { error } = schemaLogin.validate(req.body);
  if (error) return res.status(401).json({ error: error.details[0].message });

  //validation user exists
  const userExist = await User.findOne({ email: req.body.email });
  if (!userExist) return res.status(400).json({ error: 'Credenciales no validas' });

  //validation password is correct
  const passValid = await bcrypt.compare(req.body.password, userExist.password);
  if (!passValid) {
    return res.status(400).json({ error: 'La contraseña es incorrecta' })
  }

  // Response to super admin confirm login
  return res.status(200).send({ message: "OK" })
})

module.exports = router