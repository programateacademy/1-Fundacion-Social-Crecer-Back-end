const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Manager = require('./Manager');

// Ruta GET para obtener todos los Managers
router.get('/', async (req, res) => {
  try {
    const Managers = await Manager.find();
    res.json(Managers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta GET para obtener un Manager por ID
router.get('/:id', getManager, (req, res) => {
  res.json(res.Manager);
});

// Ruta POST para crear un nuevo Manager
router.post('/', async (req, res) => {
  const Manager = new Manager({
    id: req.body.id,
    name: req.body.name,
    docNum: req.body.docNum,
    email: req.body.email,
    password: req.body.password,
    unity:req.body.unity,
    date:req.body.date
  });
  try {
    const newManager = await Manager.save();
    res.status(201).json(newManager);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta PUT para actualizar un Manager existente
router.put('/:id', getManager, async (req, res) => {
  if (req.body.id != null) {
    res.Manager.id = req.body.id;
  }
  if (req.body.name != null) {
    res.Manager.name = req.body.name;
  }
  if (req.body.docNum!= null) {
    res.Manager.docNum = req.body.docNum;
  }
  if (req.body.email != null) {
    res.Manager.email = req.body.email;
  }
  if (req.body.password != null) {
    res.Manager.password = req.body.password;
  }
  if (req.body.unity!= null) {
    res.Manager.unity = req.body.unity;
  }
  if (req.body.date!= null) {
    res.Manager.date = req.body.date;
  }
  try {
    const UpdatedManager = await res.Manager.save();
    res.json(UpdatedManager);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

