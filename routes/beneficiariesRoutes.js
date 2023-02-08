const router = require("express").Router();
const prueba = require('../models/Prueba');

router.get("/", (req, res) => { 
    prueba.find((err, result) => {
        if(err) throw new Error(err);
    });
});

router.post("/", (req, res) => {
    prueba.create(req.body, (err, result) => {
        if (!err) {
            res.send("Beneficiario agregado correctamente");
        } else {
            res.send(err);
        }
    });
});

router.put("/:id", (req, res) => {
    prueba.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});


module.exports = router;