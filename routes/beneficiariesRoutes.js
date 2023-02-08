const router = require("express").Router();
const prueba = require('../models/Prueba');

router.get("/", (req, res) => { 
    movies.find((err, result) => {
        if(err) throw new Error(err);
    });
});

router.post("/beneficiarios", (req, res) => {
    prueba.create(req.body, (err, result) => {
        if (!err) {
            res.send("Beneficiario agregado correctamente");
        } else {
            res.send(err);
        }
    });
});

module.exports = router;