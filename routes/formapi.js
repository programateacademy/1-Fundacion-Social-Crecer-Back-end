const express = require('express');
const Departamento = require('../models/form/Departamento');
const router = express.Router();
const Municipio = require('../models/form/Municipio');
const User = require('../models/User');


router.get('/municipio', async (req, res) => {
    
    let codigo_departamento = req.query.codigo_departamento
codigo_departamento
Municipio.find({CODIGO_DEPARTAMENTO:codigo_departamento}, (err, municipio)=>{
try{
    res.json(municipio)
}
catch(err){
    res.json(err)
}
} )
});

router.get('/departamento', async (req, res) => {
    try {
        const departamento = await Departamento.find();
        res.json(departamento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;