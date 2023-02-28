const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('../models/User');

// Ruta GET para obtener todos los Users
router.get('/', async (req, res) => {
  try {
    const Users = await User.find();
    res.json(Users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta GET para obtener un User por ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta POST para crear un nuevo User
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    docnum:req.body.docnum,
    unity:req.body.unity,
    role:req.body.role,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Ruta PUT para actualizar un User existente
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (req.body.name != null) {
      user.name = req.body.name;
    }
    if (req.body.email != null) {
      user.email = req.body.email;
    }
    if (req.body.password != null) {
      user.password = req.body.password;
    }
    if (req.body.docnum!= null) {
      user.docnum = req.body.docnum;
    }
    if (req.body.unity!= null) {
      user.unity = req.body.unity;
    }
    if (req.body.role!= null) {
      user.role = req.body.role;
    }
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;